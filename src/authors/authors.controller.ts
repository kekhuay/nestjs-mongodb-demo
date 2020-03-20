import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './interfaces/author.interface';

@Controller('/api/v1/authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }
}
