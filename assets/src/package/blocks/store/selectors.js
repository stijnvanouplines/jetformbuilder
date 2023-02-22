const selectors = {
	getBlocks( state ) {
		return state.blocks;
	},
	getBlockMap( state ) {
		return state.blockMap;
	},
	getPropsToSave( state ) {
		return state.propsToSave;
	},
	getFields(
		state,
		{
			withInner = true,
			currentId = false,
		},
	) {
		const fields = [];

		const iterateFields = blocks => {
			for ( const block of blocks ) {
				if ( block.fields?.length && block.clientId !== currentId ) {
					fields.push( ...block.fields );
				}

				if ( !withInner || !block.innerBlocks?.length ) {
					continue;
				}

				iterateFields( block.innerBlocks );
			}
		};

		iterateFields( state.blocks );

		return fields;
	},
	isExecuted( state ) {
		return state.executed;
	},
	isRecentlyAdded( state, clientId ) {
		return -1 !== state.recentlyAdded.indexOf( clientId );
	},
	getUniqueNames( state, clientId ) {
		const currentBlock = state.blockMap[ clientId ] ?? false;

		if ( !currentBlock ) {
			return {
				hasChanged: false,
			};
		}

		let hasChanged = false;

		let names   = currentBlock.fields.map( ( { value } ) => value );
		const scope = currentBlock.hasOwnProperty( 'parentBlock' )
		              ? currentBlock.parentBlock.innerBlocks
		              : state.blocks;

		const walkerFields = ( fields ) => {
			for ( const field of fields ) {
				const nameIndex = names.indexOf( field.value );

				if ( -1 === nameIndex ) {
					continue;
				}
				names[ nameIndex ] = `${ names[ nameIndex ] }_copy`;
				hasChanged         = true;
				walkerFields( fields );
			}
		};

		for ( const block of scope ) {
			if ( clientId === block.clientId ) {
				continue;
			}
			walkerFields( block.fields );
		}

		return {
			hasChanged: hasChanged,
			names: names.join( '|' ),
		};
	},
	getSanitizedAttributes( state, attrs, blockProps = {} ) {
		const type = blockProps[ 'data-type' ] ?? '';

		for ( const attrsKey in attrs ) {
			if ( !attrs.hasOwnProperty( attrsKey ) ) {
				continue;
			}

			const sanitizers = (
				state.sanitizers?.[ type ]?.[ attrsKey ] ??
				state.sanitizers?.[ attrsKey ] ??
				false
			);

			if ( !sanitizers?.length ) {
				continue;
			}

			for ( const sanitizer of sanitizers ) {
				if ( 'function' !== typeof sanitizer ) {
					continue;
				}
				attrs[ attrsKey ] = sanitizer( attrs[ attrsKey ] );
			}
		}

		return attrs;
	},
	isUniqueName( state, clientId ) {
		const { hasChanged } = selectors.getUniqueNames( state, clientId );

		return !hasChanged;
	},
};

export default {
	...selectors,
};