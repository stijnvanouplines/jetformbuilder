import InputData from './InputData';
import { isCheckbox } from '../supports';

function CheckboxData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isCheckbox( node );
	};
	this.addListeners = function () {
		this.sanitize( value => Array.isArray( value ) ? value : [ value ] );

		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );
		}
	};
	this.setValue     = function () {
		this.value.current = this.getActiveValue();
	};

	this.merge = function ( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	};

	this.getActiveValue = function () {
		return Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );
	};
	this.valueType      = function () {
		return Array;
	};
}

CheckboxData.prototype = Object.create( InputData.prototype );

export default CheckboxData;