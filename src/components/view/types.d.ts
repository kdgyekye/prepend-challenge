import React from 'react';

export interface Types {
	species: string;
	type: string[];
	weight: number;
	stats: {
		value: number;
		name: string;
	}[];
	moves: string[];
	image: string
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}