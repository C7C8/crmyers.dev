import { Component, OnInit } from '@angular/core';
import { Image } from '../../../common/defs';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

enum IngredientType {
	FLOUR = 'Flour',
	LIQUID = 'Liquid',
	LEVAIN = 'Levain',
	OTHER = 'Other'
}

class Ingredient {
	name: string;
	percent: number;
	type: IngredientType;
	mass?: number;
}

@Component({
	selector: 'app-cooking',
	templateUrl: './cooking.component.html',
	styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {
	cookingCarouselImages: Image[] = [
		{
			image: '/assets/personal/cooking/fancy-bread-2.jpg',
			alt: 'Fancy bread',
			caption: 'Bread with fancy hatching on top.'
		},
		{
			image: '/assets/personal/cooking/pastrami.jpg',
			alt: 'Fancy pastrami',
			caption: 'Homemade cured and smoked pastrami'
		},
		{
			image: '/assets/personal/cooking/fancy-bread.jpg',
			alt: 'Fancy bread 2',
			caption: 'Bread with fancy but not-so-pretty hatching, inside a cast iron dutch oven.'
		},
		{
			image: '/assets/personal/cooking/foccacia.jpg',
			alt: 'Foccacia',
			caption: 'Foccacia topped with shredded cheddar and onion jam (caramelized with a savory flavor).'
		},
		{
			image: '/assets/personal/cooking/pita-bread.jpg',
			alt: 'Pita bread',
			caption: 'Pita bread, fresh out of the pan.'
		},
		{
			image: '/assets/personal/cooking/bread-crumb.jpg',
			alt: 'Bread crumb',
			caption: 'View of the crumb of a loaf of bread I baked when I was just getting into bread baking.'
		},
		{
			image: '/assets/personal/cooking/bread-oven-spring.jpg',
			alt: 'Bread oven spring',
			caption: 'A side view of a loaf of bread with some oven spring that I was particularly proud of.'
		},
		{
			image: '/assets/personal/cooking/brioche-rolls.jpg',
			alt: 'Brioche rolls',
			caption: 'Homemade brioche rolls that I used as hamburger buns.'
		},
		{
			image: '/assets/personal/cooking/angry-schnitzel.jpg',
			alt: 'Angry schnitzel',
			caption: '"Angry" (spicy) schnitzel.'
		},
		{
			image: '/assets/personal/cooking/schnitzel-w-biscuits.jpg',
			alt: 'Schnitzel w/biscuits',
			caption: 'Pan-fried schnitzel with homemade biscuits.'
		},
		{
			image: '/assets/personal/cooking/porkchop.jpg',
			alt: 'Sage porkchop with potato',
			caption: 'A sage-seasoned porkchop with a side of twice-baked potato.'
		},
		{
			image: '/assets/personal/cooking/braised-beef.jpg',
			alt: 'Braised beef brisket',
			caption: 'Sriracha-braised beef brisket sandwich.'
		},
		{
			image: '/assets/personal/cooking/chicken.jpg',
			alt: 'Hawaiian grilled chicken',
			caption: 'A hawaiian-inspired grilled chicken breast with a side of homemade macaroni and cheese.'
		},
		{
			image: '/assets/personal/cooking/pastie.jpg',
			alt: 'Pastie',
			caption: 'A pastie (meat-filled pastry with turnips, onions, potato, and covered with beef gravy).'
		},
		{
			image: '/assets/personal/cooking/apricot-and-peach-jam.jpg',
			alt: 'Apricot jam and peach butter',
			caption: 'Apricot jam and peach butter, freshly processed.'
		},
		{
			image: '/assets/personal/cooking/pickles.jpg',
			alt: 'Dill pickles',
			caption: 'Freshly processed dill pickles.'
		},
		{
			image: '/assets/personal/cooking/chocolate-cake.jpg',
			alt: 'Chocolate cake',
			caption: 'Chocolate cake with chocolate buttercream frosting.'
		},
		{
			image: '/assets/personal/cooking/monkey-bread.jpg',
			alt: 'Monkey bread',
			caption: 'An unhealthily large batch of monkey bread (w/frosting).'
		},
		{
			image: '/assets/personal/cooking/red-velvet-cake.jpg',
			alt: 'Red velvet cake',
			caption: 'Red velvet cake with cream cheese frosting. Unfortunately, the cake fell flat and was incredibly dense.'
		},
		{
			image: '/assets/personal/cooking/omelette.jpg',
			alt: 'Omelette',
			caption: 'An attempt at making an omelette.'
		},
		{
			image: '/assets/personal/cooking/israel-breakfast.jpg',
			alt: 'Hodge-podge breakfast',
			caption: 'A hodge-podge breakfast made from incredibly limited resources in a hotel kitchenette during my time in Israel.'
		},
		{
			image: '/assets/personal/cooking/pan-pizza.jpg',
			alt: 'Pan pizza',
			caption: 'Cast-iron pan pizza.'
		},
		{
			image: '/assets/personal/cooking/pan-pizza-2.jpg',
			alt: 'Pan pizza',
			caption: 'Cast-iron pan pizza w/pepperoni. Using the broiler for the last few minutes really adds to the flavor.'
		}
	];

	// Dough calculator
	finalMass = 1500;
	levainHydration = 80;

	types = Object.keys(IngredientType).map(key => IngredientType[key]);
	ingredients: Ingredient[] = [
		{ name: 'White flour',			type: IngredientType.FLOUR, 	percent: 90 },
		{ name: 'Whole wheat flour', 	type: IngredientType.FLOUR, 	percent: 10 },
		{ name: 'Levain', 				type: IngredientType.LEVAIN, 	percent: 20 },
		{ name: 'Water',  				type: IngredientType.LIQUID, 	percent: 50 },
		{ name: 'Salt',         		type: IngredientType.OTHER, 	percent: 2.1 },
		{ name: 'Yeast',				type: IngredientType.OTHER, 	percent: 0.2 },
	];

	dataSource = new MatTableDataSource(this.ingredients);
	displayedColumns: string[] = ['name', 'type', 'percent', 'mass'];

	ngOnInit() {
		this.calculateRecipe();
	}

	private getTotalOfType(type: IngredientType): number {
		return _.sum(this.ingredients
					.filter(ingredient => ingredient.type === type)
					.map(ingredient => ingredient.percent));
	}

	calculateRecipe(): void {
		// const levainFlour = levainMass / (1 + (this.levainHydration / 100));
		// const levainWater = (this.levainHydration / 100) * levainFlour;

		const hydration = this.getTotalOfType(IngredientType.LIQUID);
		const expectedTotalFlour = (this.finalMass / (1 + (hydration / 100)));
		const expectedTotalWater = ((hydration / 100) * expectedTotalFlour);

		const levainMass = (this.getTotalOfType(IngredientType.LEVAIN) / 100) * expectedTotalFlour;
		const levainFlour = (levainMass / (1 + (this.levainHydration / 100)));
		const levainWater = ((this.levainHydration / 100) * levainFlour);

		const totalFlour = expectedTotalFlour - levainFlour;
		const totalWater = expectedTotalWater - levainWater;

		console.log('Hydration', hydration);
		console.log('Expected total flour', expectedTotalFlour);
		console.log('Expected total water', expectedTotalWater);
		console.log('Levain mass', levainMass);
		console.log('Levain flour', levainFlour);
		console.log('Levain water', levainWater);
		console.log('Total available flour', totalFlour);
		console.log('Total available water', totalWater);

		for (const ingredient of this.ingredients.filter(i => i.type !== IngredientType.LEVAIN)) {
			ingredient.mass = (ingredient.percent / 100) * totalFlour;
		}

		const levainPercentage = this.getTotalOfType(IngredientType.LEVAIN);
		for (const ingredient of this.ingredients.filter(i => i.type === IngredientType.LEVAIN)) {
			ingredient.mass = (ingredient.percent / levainPercentage) * levainMass;
		}
	}

	addIngredient(): void {
		this.ingredients.push({ name: 'Unknown', type: IngredientType.OTHER, percent: 0 })
		this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients)
	}

	deleteIngredient(): void {
		if (this.ingredients.length > 1) {
			this.ingredients.pop()
			this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients)
		}
	}
}
