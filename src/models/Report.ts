import Realm from 'realm';

export class Report extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static schema = {
    name: 'Report',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      todo: 'ReportItem[]',
      done: 'ReportItem[]',
      typeReport: {type: 'string', default: 'daily'},
      typeValue: 'string',
    },
  };
}
