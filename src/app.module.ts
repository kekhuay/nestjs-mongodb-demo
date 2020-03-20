import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './authors/authors.module';
import { APP_PIPE } from '@nestjs/core';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-mongodb-demo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthorsModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true, skipMissingProperties: true }), 
    },
    AppService
  ],
})
export class AppModule {}
