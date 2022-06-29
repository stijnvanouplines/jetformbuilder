import RenderStateOptions from './render.state.options';

const {
	TextareaControl,
	SelectControl,
	withFilters,
} = wp.components;

const {
	FieldWithPreset,
	DynamicPreset,
} = JetFBComponents;

const {
	getFormFieldsBlocks,
} = JetFBActions;

const {
	useUniqKey,
} = JetFBHooks;

const { __ } = wp.i18n;

const {
	useState,
} = wp.element;


const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )( props => {
	const { currentItem, changeCurrentItem } = props;

	const uniqKey = useUniqKey();
	const [ formFields ] = useState( () => getFormFieldsBlocks( [], '--' ) );

	switch ( currentItem.operator ) {
		case 'render_state':
			return <RenderStateOptions
				key={ uniqKey( 'RenderStateOptions' ) }
				changeCurrentItem={ changeCurrentItem }
				currentItem={ currentItem }
			/>;
		default:
			return <>
				<SelectControl
					key={ uniqKey( 'SelectControl-field' ) }
					label="Field"
					labelPosition="side"
					value={ currentItem.field }
					options={ formFields }
					onChange={ newValue => {
						changeCurrentItem( { field: newValue } );
					} }
				/>
				<FieldWithPreset
					key={ uniqKey( 'FieldWithPreset-value_to_compare' ) }
					baseControlProps={ {
						label: 'Value to Compare',
					} }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						key={ uniqKey( 'DynamicPreset-value_to_compare' ) }
						value={ currentItem.value }
						isSaveAction={ actionClick }
						onSavePreset={ newValue => {
							changeCurrentItem( { value: newValue } );
						} }
						onUnMount={ onRequestClose }
					/> }
					triggerClasses={ [ 'trigger__textarea' ] }
				>
					<TextareaControl
						key={ uniqKey( 'TextareaControl-value' ) }
						className={ 'jet-control-clear jet-user-fields-map__list' }
						value={ currentItem.value }
						onChange={ newValue => {
							changeCurrentItem( { value: newValue } );
						} }
					/>
				</FieldWithPreset>
				{ 'set_value' === currentItem.type && <FieldWithPreset
					key={ uniqKey( 'FieldWithPreset-value_to_set' ) }
					baseControlProps={ {
						label: __( 'Value to Set', 'jet-form-builder' ),
						help: __( 'Separate values with commas', 'jet-form-builder' ),
					} }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						key={ uniqKey( 'DynamicPreset-value_to_set' ) }
						value={ currentItem.set_value }
						isSaveAction={ actionClick }
						onSavePreset={ newValue => {
							changeCurrentItem( { set_value: newValue } );
						} }
						onUnMount={ onRequestClose }
					/> }
					triggerClasses={ [ 'trigger__textarea' ] }
				>
					<TextareaControl
						key={ uniqKey( 'TextareaControl-set_value' ) }
						className={ 'jet-control-clear jet-user-fields-map__list' }
						value={ currentItem.set_value }
						onChange={ newValue => {
							changeCurrentItem( { set_value: newValue } );
						} }
					/>
				</FieldWithPreset> }
			</>;
	}
} );

export default ConditionOptions;