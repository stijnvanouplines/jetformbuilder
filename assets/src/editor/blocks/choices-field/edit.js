import { name } from './index';
import Placeholder from './placeholder';

const { __ } = wp.i18n;

let {
	    InspectorControls,
	    useBlockProps,
	    useInnerBlocksProps,
    } = wp.blockEditor;

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
	      StyleManagerEditControls,
      } = JetFBComponents;

const {
	      PanelBody,
      } = wp.components;

const {
	      useJetStyle,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const ALLOWED_BLOCKS = [ 'jet-forms/choice' ];

const DefaultPlaceHolder = (
	<>
		<li className="jet-form-builder-choice--item">
			{ __( 'Yes', 'jet-form-builder' ) }
		</li>
		<li className="jet-form-builder-choice--item">
			{ __( 'No', 'jet-form-builder' ) }
		</li>
	</>
);

export default function EditAdvancedChoicesField( props ) {
	const {
		      isSelected,
	      } = props;

	useUniqueNameOnDuplicate();

	const jetStyle = useJetStyle();

	const blockProps       = useBlockProps( {
		className: 'jet-form-builder-choice',
		style: jetStyle,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? <Placeholder/> : DefaultPlaceHolder,
	} );

	return <>
		<ToolBarFields/>
		<StyleManagerEditControls optionVars={ {
			'--choice-bg': {
				label: __( 'Choice background', 'jet-form-builder' ),
			},
			'--choice-checked-bg': {
				label: __( 'Choice checked background', 'jet-form-builder' ),
			},
		} }/>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
		</InspectorControls>
		<ul { ...innerBlocksProps } />
	</>;
}