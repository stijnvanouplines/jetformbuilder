function ReactiveVar( value ) {
	this.current = value;
	this.signals = [];
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( callable.bind( this ) );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	make: function () {
		let current = this.current;
		const self  = this;

		Object.defineProperty( this, 'current', {
			get() {
				return current;
			},
			set( newVal ) {
				if ( current === newVal ) {
					return;
				}
				current = newVal;
				self.notify();
			},
		} );
	},
	notify: function () {
		this.signals.forEach( signal => signal() );
	},
	setIfEmpty( newValue ) {
		if ( (
			!this.current.hasOwnProperty( 'length' ) && this.current
			) ||
			(
				this.current.hasOwnProperty( 'length' ) && this.current.length
			)
		) {
			return;
		}

		this.current = newValue;
	},
};

export default ReactiveVar;