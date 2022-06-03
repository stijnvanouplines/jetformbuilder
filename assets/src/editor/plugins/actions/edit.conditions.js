import { conditionSettings } from './options';
import { useCurrentAction, useUpdateCurrentAction } from './hooks';

const {
	FieldWithPreset,
	DynamicPreset,
	RepeaterItemContext,
	Repeater,
	RepeaterAddNew,
	SafeDeleteToggle,
	HorizontalLine,
} = JetFBComponents;

const {
	useRequestEvents,
} = JetFBHooks;

const {
	getFormFieldsBlocks,
} = JetFBActions;

const {
	SelectControl,
	TextareaControl,
	ToggleControl,
	FormTokenField,
	BaseControl,
	TabPanel,
} = wp.components;

const { __ } = wp.i18n;

const { compose } = wp.compose;

const { useEffect, useState, useContext } = wp.element;

const operators = [
	{ value: 'and', label: __( 'AND (ALL conditions must be met)', 'jet-form-builder' ) },
	{ value: 'or', label: __( 'OR (at least ONE condition must be met)', 'jet-form-builder' ) },
];

function getConditionOptionFrom( from, value ) {
	const option = conditionSettings[ from ].find( item => item.value === value );

	return ( optionName, ifNot = '' ) => option ? (
		option[ optionName ] || ifNot
	) : ifNot;
}

function getOperatorOption( operator ) {
	return getConditionOptionFrom( 'operators', operator );
}

function getTransformerOption( value ) {
	return getConditionOptionFrom( 'compare_value_formats', value );
}

function RepeaterItem( { formFields } ) {
	const { currentItem, changeCurrentItem } = useContext( RepeaterItemContext );

	let executeLabel = __( 'To fulfill this condition, the result of the check must be', 'jet-form-builder' ) + ' ';
	executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';

	const transformerOption = getTransformerOption( currentItem.compare_value_format );
	const operatorOption = getOperatorOption( currentItem.operator );

	return <>
		<ToggleControl
			label={ executeLabel }
			checked={ currentItem.execute }
			onChange={ newValue => {
				changeCurrentItem( { execute: newValue } );
			} }
		/>
		<SelectControl
			label="Operator"
			labelPosition="side"
			help={ operatorOption( 'help' ) }
			value={ currentItem.operator }
			options={ conditionSettings.operators }
			onChange={ operator => changeCurrentItem( { operator } ) }
		/>
		<SelectControl
			label="Field"
			labelPosition="side"
			value={ currentItem.field }
			options={ formFields }
			onChange={ field => changeCurrentItem( { field } ) }
		/>
		<SelectControl
			label={ __( 'Type transform comparing value', 'jet-form-builder' ) }
			labelPosition="side"
			value={ currentItem.compare_value_format }
			options={ conditionSettings.compare_value_formats }
			onChange={ compare_value_format => {
				changeCurrentItem( { compare_value_format } );
			} }
		/>
		{ transformerOption( 'help' ).length > 0 && <p
			className={ 'components-base-control__help' }
			style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
			dangerouslySetInnerHTML={ { __html: transformerOption( 'help' ) } }
		/> }
		<FieldWithPreset
			baseControlProps={ {
				label: 'Value to Compare',
			} }
			ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
				value={ currentItem.default }
				isSaveAction={ actionClick }
				onSavePreset={ newValue => {
					changeCurrentItem( { default: newValue } );
				} }
				excludeSources={ [ 'query_var' ] }
				onUnMount={ onRequestClose }
			/> }
			triggerClasses={ [ 'trigger__textarea' ] }
		>
			<TextareaControl
				className={ 'jet-control-clear jet-user-fields-map__list' }
				value={ currentItem.default }
				help={ operatorOption( 'need_explode' )
					? conditionSettings.help_for_exploding_compare
					: '' }
				onChange={ newValue => {
					changeCurrentItem( { default: newValue } );
				} }
			/>
		</FieldWithPreset>
	</>;
}

function EditEvents( props ) {
	const provideEvents = useRequestEvents();

	const { currentAction } = useCurrentAction();
	const { setCurrentAction } = useUpdateCurrentAction();

	return <BaseControl
		label={ __( 'Choose events', 'jet-form-builder' ) }
		className={ 'control-flex' }
	>
		<FormTokenField
			label={ __( 'Add event', 'jet-form-builder' ) }
			value={ currentAction.events ?? [] }
			suggestions={ provideEvents }
			onChange={ events => setCurrentAction( { ...currentAction, events } ) }
			tokenizeOnSpace
		/>
	</BaseControl>;
}

function EditFields() {
	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		setFormFields( getFormFieldsBlocks( [], '--' ) );
	}, [] );

	const { currentAction } = useCurrentAction();
	const { setCurrentAction, updateCurrentConditions } = useUpdateCurrentAction();

	return <>
		<SelectControl
			key={ 'SelectControl-operator' }
			label={ __( 'Condition Operator', 'jet-form-builder' ) }
			labelPosition="side"
			value={ currentAction.condition_operator || 'and' }
			options={ operators }
			onChange={ condition_operator => setCurrentAction( { ...currentAction, condition_operator } ) }
		/>
		<SafeDeleteToggle>
			<Repeater
				onSetState={ updateCurrentConditions }
				items={ currentAction.conditions ?? [] }
			>
				<RepeaterItem formFields={ formFields }/>
			</Repeater>
		</SafeDeleteToggle>
		<RepeaterAddNew
			onSetState={ updateCurrentConditions }
		>
			{ __( 'Add New Condition', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;
}

function EditConditions() {
	return <>
		<TabPanel
			className="jfb-conditions-tab-panel"
			initialTabName={ 'fields' }
			tabs={ [
				{
					name: 'fields',
					title: __( 'Fields comparison', 'jet-form-builder' ),
					edit: <EditFields />,
				},
				{
					name: 'events',
					title: __( 'Events match', 'jet-form-builder' ),
					edit: <EditEvents/>,
				},
			] }
		>
			{ tab => tab.edit }
		</TabPanel>
	</>;
}


export default EditConditions;