const {
		  GeneralFields,
		  AdvancedFields,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
		  RichText,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  TextareaControl,
		  TextControl,
		  PanelBody,
		  Button,
		  ToggleControl,
	  } = wp.components;

export default function FormBreakEdit( props ) {

	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  editProps: { uniqKey, attrHelp },
			  context,
		  } = props;

	return [
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				autoCompleteLabel={ false }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<ToggleControl
					key={ uniqKey( 'add_next_button' ) }
					label={ __( 'Disable "Next" Button', 'jet-form-builder' ) }
					checked={ attributes.add_next_button }
					help={ attrHelp( 'add_next_button' ) }
					onChange={ add_next_button => setAttributes( { add_next_button } ) }
				/>
				<TextControl
					label={ __( 'Label of progress', 'jet-form-builder' ) }
					value={ attributes.label_progress }
					help={ attrHelp( 'label_progress' ) }
					onChange={ ( newValue ) => {
						props.setAttributes( { label_progress: newValue } );
					} }
				/>
				<TextareaControl
					key="page_break_disabled"
					value={ attributes.page_break_disabled }
					label={ __( 'Validation message', 'jet-form-builder' ) }
					help={ attrHelp( 'page_break_disabled' ) }
					onChange={ ( newValue ) => {
						setAttributes( { page_break_disabled: newValue } );
					} }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className={ 'jet-form-builder__next-page-wrap' }>
				{ attributes.add_next_button ? <Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>
					<RichText
						placeholder='Next...'
						allowedFormats={ [] }
						value={ attributes.label }
						onChange={ label => setAttributes( { label } ) }
					/>
				</Button> : <span>
					{ __( 'Form Break', 'jet-form-builder' ) }
				</span> }
				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>
					<RichText
						placeholder='Prev...'
						allowedFormats={ [] }
						value={ attributes.prev_label }
						onChange={ prev_label => setAttributes( { prev_label } ) }
					/>
				</Button> }
			</div>
		</div>,
	];

}