import {Store} from './store';

export class Service {
  constructor(private store: Store) {
  }

  run() {
    const {
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
    } = this.store

    if (
      field1 === undefined ||
      field2 === undefined ||
      field3 === undefined ||
      field4 === undefined ||
      field5 === undefined ||
      field6 === undefined ||
      field7 === undefined ||
      field8 === undefined ||
      field9 === undefined
    ) {
      return;
    }

    // do something
    const v1 = field1.toUpperCase() + field2.toUpperCase() + field3.toUpperCase() + field4.toUpperCase();
    console.log(v1);

    // do something
    const v2 = field3.toUpperCase() + field4.toUpperCase() + field5.toUpperCase() + field6.toUpperCase();
    console.log(v2);

    // do something
    const v3 = field6.toUpperCase() + field7.toUpperCase() + field8.toUpperCase() + field9.toUpperCase();
    console.log(v3);
  }
}
