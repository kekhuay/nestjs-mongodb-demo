import { Schema } from 'mongoose';

export const AuthorSchema = new Schema({
  'first_name': {type: String, alias: 'firstName'},
  'last_name': {type: String, alias: 'lastName'},
  'gender': {type: String},
  'books': [
    {
      '_id': false,
      'book': {type: Schema.Types.ObjectId, ref: 'Book'},
      'provinces': {type: [String]}
    },
  ],
});
