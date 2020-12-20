import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

class Link {
	href: string;
	text: string;
}

class Category {
	name: string
	links: Link[];
}

@Component({
	selector: 'app-interesting-stuff',
	templateUrl: './interesting-stuff.component.html',
	styleUrls: ['./interesting-stuff.component.scss']
})
export class InterestingStuffComponent implements OnInit {

	linkCategories: Category[] = [
		{name: 'Science & Engineering', links: [
				{href: 'https://sites.wustl.edu/meteoritesite/items/self-test-check-list/', text: 'Is it a Meteor?'},
				{href: 'https://musclewiki.com/', text: 'MuscleWiki'},
				{href: 'https://www.ifixit.com/', text: 'iFixIt'},
				{href: 'https://metacademy.org/', text: 'Metacademy'},
				{href: 'http://setosa.io/ev/', text: 'Explained Visually'},
				{href: 'http://www.falstad.com/circuit/circuitjs.html', text: 'Circuit Simulator'},
				{href: 'http://products.wdc.com/library/other/2579-771970.pdf', text: 'WD 3.5-inch Form Factor Mounting and Screw Locations and Depths'}
			]},
		{name: 'Computers & Programming', links: [
				{href: 'https://pcpartpicker.com/', text: 'PCPartPicker'},
				{href: 'https://en.wikipedia.org/wiki/PDP-11_architecture', text: 'PDP-11 Architecture (Wikipedia)'},
				{href: 'https://www.quora.com/Whats-the-hardest-bug-youve-debugged/answer/Dave-Baggett', text: 'What\'s the Hardest Bug You\'ve Debugged?'},
				{href: 'https://projecteuler.net/', text: 'Project Euler'},
				{href: 'https://www.w3schools.com/colors/colors_picker.asp', text: 'W3Schools HTML Color Picker'},
				{href: 'http://playground.tensorflow.org', text: 'TensorFlow Playground'},
				{href: 'https://davidverhasselt.com/hide-data-in-bad-blocks/', text: 'Hide Data in Bad Blocks'},
				{href: 'http://ethanschoonover.com/solarized', text: 'Solarized Theme'},
				{href: 'https://mdaines.github.io/grammophone', text: 'Grammophone'},
				{href: 'https://github.com/danluu/debugging-stories', text: 'Debugging Stories'}
			]},
		{name: 'Art', links: [
				{href: 'http://www.trekcore.com/audio/', text: 'TrekCore (audio section)'},
				{href: 'https://material.io/tools/color/', text: 'Material Design Color Tool'},
				{href: 'https://www.music-map.com/', text: 'Music Map'},
				{href: 'http://paletton.com/', text: 'Palleton'},
				{href: 'http://www.hemingwayapp.com/', text: 'Hemingway Editor'},
				{href: 'https://i.imgur.com/E42hJ7I.jpg', text: 'Blender Controls Guide'},
				{href: 'https://encycolorpedia.com/', text: 'Encycolorpedia'},
				{href: 'https://lostandtaken.com/', text: 'Lost and Taken'}
			]},
		{name: 'Humor', links: [
				{href: 'http://bofh.bjash.com', text: 'The Bastard Operator from Hell'},
				{href: 'https://i.imgur.com/p3uNn64.gif', text: 'Nail Clipper v. Tooth'},
				{href: 'https://www.stilldrinking.org/programming-sucks', text: 'Programming Sucks'},
				{href: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f', text: 'How it Feels to Learn JavaScript in 2016'}
			]},
		{name: 'Misc. Commentary & Philosophy', links: [
				{href: 'https://www.info.ucl.ac.be/~pvr/decon.html', text: 'How to Deconstruct Almost Anything'},
				{href: 'https://philosophynow.org/issues/46/Newtons_Flaming_Laser_Sword', text: 'Newton\'s Flaming Laser Sword'},
				{href: 'https://highline.huffingtonpost.com/articles/en/poor-millennials/', text: 'Millenials are Screwed'}
			]},
	]

	constructor() { }

	ngOnInit() {
	}

	randomLink() {
		window.location.href = _.sample(_.flatMap(this.linkCategories, cat => cat.links)).href
	}
}
