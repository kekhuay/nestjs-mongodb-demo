import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './schemas/author.schema';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Author',
      schema: AuthorSchema
    }
  ])],
  providers: [AuthorsService],
  controllers: [AuthorsController]
})
export class AuthorsModule {}
