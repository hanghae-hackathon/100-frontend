import { create } from "zustand";

export type SearchResultType = {
	id?: number;
	video?: string;
	image?: string;
	type?: string;
	name?: string;
	age?: string;
	weight?: string;
	sex?: string;
	walkingTime?: string;
	hairLength?: string;
	childcareDifficulty?: string;
	description?: string;
	neutrification?: boolean;
	independent?: boolean;
	phone?: string;
};

type resultStoreType = {
	result: SearchResultType;
	handleChangeResult: (result: resultStoreType["result"]) => void;
};

export const useResultStore = create<resultStoreType>((set) => ({
	result: {
		id: undefined,
		video: undefined,
		image: undefined,
		type: undefined,
		name: undefined,
		age: undefined,
		weight: undefined,
		sex: undefined,
		walkingTime: undefined,
		hairLength: undefined,
		childcareDifficulty: undefined,
		description: undefined,
		neutrification: undefined,
		independent: undefined,
		phone: undefined,
	},
	handleChangeResult: (result): void => {
		set(() => ({
			result,
		}));
	},
}));
