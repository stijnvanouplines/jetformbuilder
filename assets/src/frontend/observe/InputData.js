import ConditionChecker from '../conditional.logic/ConditionChecker';
import SignalHiddenArray from '../signals/SignalHiddenArray';
import SignalCheckbox from '../signals/SignalCheckbox';
import SignalRadio from '../signals/SignalRadio';
import SignalText from '../signals/SignalText';
import SignalRepeater from '../signals/SignalRepeater';
import { getParsedName, isRequired } from './functions';
import SignalCalculated from '../signals/SignalCalculated';
import SignalMultiSelect from '../signals/SignalMultiSelect';
import SignalFile from '../signals/SignalFile';
import ReactiveVar from '../ReactiveVar';
import SignalWysiwyg from '../signals/SignalWysiwyg';
import ReportingField from '../reporting/ReportingField';

/**
 * @type {(BaseSignal)[]}
 */
const signalTypes = [
	new SignalWysiwyg(),
	new SignalFile(),
	new SignalMultiSelect(),
	new SignalCheckbox(),
	new SignalRadio(),
	new SignalRepeater(),
	new SignalCalculated(),
	new SignalHiddenArray(),
	new SignalText(),
];

class InputData {

	constructor() {
		this.rawName            = '';
		this.name               = '';
		this.comment            = false;
		this.nodes              = [];
		this.relatedConditional = [];

		this.value     = new ReactiveVar( null );
		this.calcValue = null;

		/**
		 * @type {ConditionChecker}
		 */
		this.checker = this.conditionChecker();
		this.reporting = this.reportingInterface();

		/**
		 * @type {Observable}
		 */
		this.root = null;
	}

	isSupported( node ) {
		return true;
	}

	/**
	 * @returns {boolean}
	 */
	isRequired() {
		return isRequired( this.nodes[ 0 ] );
	}

	/**
	 * @returns {boolean}
	 */
	isValid() {
		return this.nodes[ 0 ].checkValidity();
	}

	report() {
		this.nodes[ 0 ].reportValidity();
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'input', event => {
			this.value.current = event.target.value;
		} );
	}

	makeReactive() {
		this.addListeners();
		this.setValue();
		this.setComment();

		this.value.make();
	}

	onChange() {
		this.calcValue = this.value.current;

		// apply changes in DOM
		this.callable.runSignal();

		// show errors
		this.reporting.update();
	}

	watch( callable ) {
		this.value.watch( callable );
	}

	/**
	 * @param inputData {InputData}
	 */
	merge( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	}

	setValue() {
		if ( this.isArray() ) {
			this.value.current = Array.from( this.nodes ).
				map( ( { value } ) => value );
		}
		else {
			this.value.current = this.nodes[ 0 ]?.value;
		}
	}

	setNode( node ) {
		this.nodes   = [ node ];
		this.rawName = node.name ?? '';
		this.name    = getParsedName( this.rawName );

		/**
		 * @type {BaseSignal}
		 */
		this.callable = signalTypes.find(
			( type ) => type.isSupported( node, this ),
		);
		this.callable.setInput( this );

		/**
		 * Save link to this object
		 * @type {InputData}
		 */
		node.jfbSync = this;
	}

	/**
	 * @param observable {Observable}
	 */
	setRoot( observable ) {
		this.root = observable;
	}

	setComment() {
		this.comment   = document.createComment( this.name );
		const [ node ] = this.nodes;

		node.parentElement.insertBefore( this.comment, node );
	}

	/**
	 * By default it runs only if repeater item was removed
	 */
	onRemove() {
	}

	/**
	 * @returns {boolean}
	 */
	validate() {
		return (
			!this.isRequired() || this.isValid()
		);
	}

	/**
	 * @private
	 * @returns {ConditionChecker}
	 */
	conditionChecker() {
		return new ConditionChecker();
	}

	/**
	 * @private
	 * @returns {ReportingField}
	 */
	reportingInterface() {
		return new ReportingField( this );
	}

	/**
	 * @returns {string}
	 */
	getName() {
		return this.name;
	}

	/**
	 * @returns {array|string}
	 */
	getValue() {
		return this.value.current;
	}

	/**
	 * @returns {array}
	 */
	getNode() {
		return this.nodes;
	}

	/**
	 * @returns {boolean}
	 */
	isArray() {
		return this.rawName.includes( '[]' );
	}

	insertError( message ) {
		const [ node ] = this.nodes;
		const error    = this.createError( node, message );

		node.classList.add( 'field-has-error' );

		if ( !error.isConnected ) {
			node.appendChild( error );
		}
	}

	createError( node, message ) {
		const error = node.querySelector( '.error-message' );

		if ( error ) {
			error.innerHTML = message;

			return error;
		}

		const div = document.createElement( 'div' );

		div.classList.add( 'error-message' );
		div.innerHTML = message;

		return div;
	}

	/**
	 * @returns {FormSubmit}
	 */
	getSubmit() {
		return this.root.form
		       ? this.root.form
		       : this.root.parent.root.form;
	}
}

export default InputData;