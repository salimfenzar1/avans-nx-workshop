import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
} from 'class-validator';
import {
    ICreateMeal,
    IUpdateMeal,
    IUpsertMeal,
    MealSort
} from '@avans-nx-workshop/shared/api';
import { ApiProperty } from '@nestjs/swagger';
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */



export class CreateMealDto implements ICreateMeal {
    @ApiProperty({ description: 'The title of the meal', example: 'Spaghetti Bolognese' })
    @IsString()
    @IsNotEmpty()
    title!: string;

    @ApiProperty({ description: 'A short description of the meal', example: 'Delicious Italian pasta with meat sauce' })
    @IsString()
    @IsNotEmpty()
    description!: string;

    @ApiProperty({ description: 'The type of meal', example: MealSort.Dinner })
    @IsString()
    @IsNotEmpty()
    sort!: MealSort;

    @ApiProperty({ description: 'The cook of the meal', example: 'John Doe' })
    @IsString()
    @IsNotEmpty()
    cook!: string;
}


export class UpsertMealDto implements IUpsertMeal {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsBoolean()
    @IsNotEmpty()
    isVega!: boolean;

    @IsDate()
    @IsNotEmpty()
    dateServed!: Date;

    @IsString()
    @IsNotEmpty()
    sort!: MealSort;

    @IsString()
    @IsNotEmpty()
    cook!: string;
}

export class UpdateMealDto implements IUpdateMeal {
    @IsString()
    @IsOptional()
    title!: string;

    @IsString()
    @IsOptional()
    description!: string;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}
