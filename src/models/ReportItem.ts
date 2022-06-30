import Realm from 'realm';

export class ReportItem extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(habitId: 'objectId') {
    return {
      _id: new Realm.BSON.ObjectId(),
      habitId: habitId,
      amountDone: 0,
    };
  }

  static schema = {
    name: 'ReportItem',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      habitId: 'objectId',
      amountDone: {type: 'int', default: 0},
    },
  };
}
