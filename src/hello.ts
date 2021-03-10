import {Store} from './Store';
import {Service} from './Service';

const store = new Store();
store.field1 = '~ test-field1 ~';
store.field2 = '~ test-field2 ~';
store.field3 = '~ test-field3 ~';
store.field4 = '~ test-field4 ~';
store.field5 = '~ test-field5 ~';
store.field6 = '~ test-field6 ~';
store.field7 = '~ test-field7 ~';
store.field8 = '~ test-field8 ~';
store.field9 = '~ test-field9 ~';

const service = new Service(store);
service.run();
