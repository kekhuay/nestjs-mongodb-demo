import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  findAll() {
    return this.bookModel.find().exec();
  }

  create(createBookDto: CreateBookDto) {
    const book = new this.bookModel(createBookDto);
    return book.save();
  }
}
