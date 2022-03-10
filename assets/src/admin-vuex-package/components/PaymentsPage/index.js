import PaymentsComponent from './PaymentsComponent';
import BaseStore from '../../store/base-store';
import TableModulePlugin from '../../store/plugins/table-module';
import TableSeedPlugin from '../../store/plugins/table-seed';
import * as PaymentType from './payment-type';
import * as StatusColumn from './status';
import * as PayerColumn from '../TableColumns/payer';

const { addFilter } = wp.hooks;

addFilter( 'jet.fb.admin.table.default', 'jet-form-builder', components => {
	components.push( PayerColumn, PaymentType, StatusColumn );

	return components;
} );

const store = {
	...BaseStore,
	plugins: [ TableModulePlugin(), TableSeedPlugin() ]
};

export default { PaymentsComponent, options: { store } };