import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';


@Module({
  imports: [MealModule],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
