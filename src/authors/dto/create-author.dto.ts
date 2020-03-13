import { Expose } from 'class-transformer';

export class CreateAuthorDto {
  @Expose({
    name: 'first_name',
  })
  readonly firstName: string;
  @Expose({
    name: 'last_name',
  })
  readonly lastName: string;
  readonly gender: string;
}
