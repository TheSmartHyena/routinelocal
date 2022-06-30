import Realm from 'realm';

export class Habit extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(name: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name: name,
      description: '',
      frequency: 'daily',
      icon_name: 'default',
      createdAt: new Date(),
      amount: 1,
    };
  }

  static schema = {
    name: 'Habit',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      description: {type: 'string', default: ''},
      frequency: {type: 'string', default: 'daily'},
      icon_name: {type: 'string', default: 'default'},
      createdAt: {type: 'date', default: new Date()},
      amount: {type: 'int', default: 1},
    },
  };
}
