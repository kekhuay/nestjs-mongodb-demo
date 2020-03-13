import * as mongoose from "mongoose";

export const AuthorSchema = new mongoose.Schema({
  'first_name': {'type': String, 'alias': 'firstName'},
  'last_name': {'type': String, 'alias': 'lastName'},
  'gender': {'type': String}
});
