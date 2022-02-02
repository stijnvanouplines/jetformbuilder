export default {
	methods: {
		promiseWrapper( callableFunc ) {
			const prepareMessage = message => {
				return 'object' === typeof message ? message?.message : message;
			};

			return ( payload, resolve, reject ) => {
				const onSuccess = message => {
					if ( 'function' === typeof resolve ) {
						resolve();
					}

					this.$CXNotice.add( {
						message: prepareMessage( message ),
						type: 'success',
						duration: 4000,
					} );
				};

				const onError = message => {
					if ( 'function' === typeof reject ) {
						reject();
					}

					this.$CXNotice.add( {
						message: prepareMessage( message ),
						type: 'error',
						duration: 4000,
					} );
				};


				try {
					callableFunc.call( this, { payload, onSuccess, onError } );
				} catch ( error ) {
					onError( error.message );
				}
			};
		}
	}
}