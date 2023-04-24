import useCheckedChoiceState from '../choice/useCheckedChoiceState';

const { __ } = wp.i18n;

const {
	      useBlockProps,
	      RichText,
	      InspectorControls,
	      MediaUpload,
	      MediaUploadCheck,
      } = wp.blockEditor;

const {
	      useInstanceId,
      } = wp.compose;

let {
	    Button,
	    PanelBody,
	    __experimentalToolsPanel,
	    ToolsPanel,
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
	    RangeControl,
	    __experimentalToggleGroupControl,
	    ToggleGroupControl,
	    __experimentalToggleGroupControlOption,
	    ToggleGroupControlOption,
    } = wp.components;

ToolsPanel = (
	ToolsPanel || __experimentalToolsPanel
);

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

ToggleGroupControl = (
	ToggleGroupControl || __experimentalToggleGroupControl
);

ToggleGroupControlOption = (
	ToggleGroupControlOption || __experimentalToggleGroupControlOption
);

const {
	      BaseHelp,
	      BaseLabel,
      } = JetFBComponents;

const {
	      useStyle,
	      useJetStyle,
      } = JetFBHooks;

function SimpleChooseMediaButton( { open, hasValue = false } ) {
	return <Button
		isSecondary
		isSmall
		icon="edit"
		onClick={ open }
		className={ hasValue ? 'jet-fb has-value' : '' }
		label={ hasValue ? __( 'Edit icon', 'jet-form-builder' )
		                 : __( 'Choose icon', 'jet-form-builder' ) }
	>
		{ hasValue
		  ? __( 'Edit', 'jet-form-builder' )
		  : __( 'Choose', 'jet-form-builder' ) }
	</Button>;
}

export default function EditChoiceCheck( props ) {
	const {
		      context,
		      setAttributes,
		      attributes,
		      clientId,
	      } = props;

	const {
		      'jet-forms/choices-field--multiple': isMultiple,
		      'jet-forms/choices-field--name': fieldName,
	      } = context;

	const jetStyle = useJetStyle();

	const blockProps = useBlockProps( {
		className: 'jet-form-builder-choice--item-control',
		style: jetStyle,
	} );

	const instanceId = useInstanceId( EditChoiceCheck, fieldName );

	const [ width, setWidth ]          = useStyle( '--control-width' );
	const [ isChecked, toggleChecked ] = useCheckedChoiceState();

	const widthInt = parseInt( width );

	const hasWidth = () => {
		return !!width;
	};

	//
	return <>
		<span { ...blockProps }>
			<input
				id={ instanceId }
				type={ isMultiple ? 'checkbox' : 'radio' }
				checked={ isChecked }
				onChange={ () => toggleChecked() }
			/>
			<RichText
				tagName={ 'label' }
				value={ attributes.label }
				onChange={ label => setAttributes( { label } ) }
				placeholder={ __( 'Label for input...', 'jet-form-builder' ) }
				multiline={ false }
				//htmlFor={ instanceId }
			/>
		</span>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<ToggleGroupControl
					onChange={ control_type => setAttributes(
						{ control_type } ) }
					value={ attributes.control_type }
					label={ __( 'Control type', 'jet-form-builder' ) }
					isBlock={ true }
				>
					<ToggleGroupControlOption
						label={ isMultiple
						        ? __( 'Checkbox input', 'jet-form-builder' )
						        : __( 'Radio input', 'jet-form-builder' )
						}
						value={ '' }
					/>
					<ToggleGroupControlOption
						label={ __( 'Image', 'jet-form-builder' ) }
						value={ 'image' }
					/>
				</ToggleGroupControl>
			</div>
		</InspectorControls>
		{ 'image' === attributes.control_type && <>
			<InspectorControls>
				<MediaUploadCheck>
					<PanelBody
						title={ __( 'Control Default', 'jet-form-builder' ) }>
						<BaseLabel label={ __(
							'Default icon',
							'jet-form-builder',
						) }>
							<MediaUpload
								onSelect={ media => setAttributes( {
									default_image_control: {
										...(
											attributes.default_image_control ??
											{}
										),
										url: media.url,
										id: media.id,
									},
								} ) }
								allowedTypes={ [ 'image/*' ] }
								value={ attributes.default_image_control?.id }
								render={
									( { open } ) => <SimpleChooseMediaButton
										open={ open }
										hasValue={ !!attributes.default_image_control?.url }
									/>
								}
							/>
							{ !!attributes.default_image_control?.url && <Button
								isDestructive
								isSmall
								icon="no-alt"
								onClick={ () => setAttributes( {
									default_image_control: {},
								} ) }
								label={ __(
									'Remove default icon',
									'jet-form-builder',
								) }
							/> }
						</BaseLabel>
						{ !!attributes.default_image_control?.url && <>
							<img
								src={ attributes.default_image_control?.url }
								style={ {
									maxWidth: '150px',
									maxHeight: '150px',
									margin: '1em 0',
								} }
							/>
						</> }
						<BaseHelp>
							{ __(
								'Choose icon for default state of choice',
								'jet-form-builder',
							) }
						</BaseHelp>
					</PanelBody>
					<PanelBody
						title={ __( 'Control Checked', 'jet-form-builder' ) }
					>
						<BaseLabel
							label={ __(
								'Checked Icon',
								'jet-form-builder',
							) }
						>
							<MediaUpload
								onSelect={ media => setAttributes( {
									checked_image_control: {
										...(
											attributes.checked_image_control ??
											{}
										),
										url: media.url,
										id: media.id,
									},
								} ) }
								allowedTypes={ [ 'image/*' ] }
								value={ attributes.checked_image_control?.id }
								render={
									( { open } ) => <SimpleChooseMediaButton
										open={ open }
										hasValue={ !!attributes.checked_image_control?.url }
									/>
								}
							/>
							{ !!attributes.checked_image_control?.url && <Button
								isDestructive
								isSmall
								icon="no-alt"
								onClick={ () => setAttributes( {
									checked_image_control: {},
								} ) }
								label={ __(
									'Remove checked icon',
									'jet-form-builder',
								) }
							/> }
						</BaseLabel>
						{ !!attributes.checked_image_control?.url && <>
							<img
								src={ attributes.checked_image_control?.url }
								style={ {
									maxWidth: '150px',
									maxHeight: '150px',
									margin: '1em 0',
								} }
							/>
						</> }
						<BaseHelp>
							{ __(
								'Choose icon for checked state of choice',
								'jet-form-builder',
							) }
						</BaseHelp>
					</PanelBody>
				</MediaUploadCheck>
			</InspectorControls>
			<InspectorControls group={ 'styles' }>
				<ToolsPanel
					hasValue={ hasWidth }
					label={ __( 'Image control', 'jet-form-builder' ) }
					resetAll={ () => setWidth() }
					panelId={ clientId }
				>
					<ToolsPanelItem
						hasValue={ hasWidth }
						label={ __( 'Width', 'jet-form-builder' ) }
						onDeselect={ () => setWidth() }
						panelId={ clientId }
						isShownByDefault
					>
						<RangeControl
							help={ __(
								`Specify the width of the image in pixels.`,
								'jet-form-builder',
							) }
							initialPosition={ 24 }
							label={ __( 'Width', 'jet-form-builder' ) }
							value={ widthInt }
							max={ 200 }
							min={ 0 }
							onChange={
								value => setWidth( value ? `${ value }px` : 0 )
							}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</> }
	</>;
}