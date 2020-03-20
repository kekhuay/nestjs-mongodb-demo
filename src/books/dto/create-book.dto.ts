import { Expose } from "class-transformer";

export class CreateBookDto {
  @Expose({
    name: 'title',
  })
  readonly title: string;
  @Expose({
    name: 'pages',
  })
  readonly pages: number;
}
