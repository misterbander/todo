import { Realm, createRealmContext } from '@realm/react';

export class Todo extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static generate(title: string, description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  static schema = {
    name: 'Todo',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      description: 'string',
      createdAt: 'date',
      updatedAt: 'date'
    }
  };
}

export default createRealmContext({
  schema: [Todo]
});
