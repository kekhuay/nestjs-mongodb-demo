import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel('Author') private readonly authorModel: Model<Author>) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return createdAuthor.save();
  }

  findAll() {
    return this.authorModel.find().populate('books.book');
  }
}
