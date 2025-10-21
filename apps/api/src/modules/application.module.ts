import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    /** Add your modules here */
    ExampleModule,
  ],
  providers: [],
})
export class ApplicationModules {}
