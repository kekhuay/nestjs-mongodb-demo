import { Schema } from 'mongoose';

export const BookSchema = new Schema({
  'title': {type: String},
  'pages': {type: Number},
});
