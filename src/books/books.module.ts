import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { BooksController } from './books.controller';

@Module({
  providers: [BooksService],
  imports: [MongooseModule.forFeature([
    {
      name: 'Book',
      schema: BookSchema
    }
  ])],
  controllers: [BooksController],
})
export class BooksModule {}
