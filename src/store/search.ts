import { create } from "zustand";

type DogGender = "boy" | "girl";
type DogHairLength = "short" | "middle" | "long";

type SearchParameter = {
	type?: string;
	ageStart?: number;
	ageEnd?: number;
	weight?: number;
	sex?: DogGender;
	behavior?: Array<string>;
	isNeutrification?: boolean;
	walkingTime?: number;
	hairLength?: DogHairLength;
	isIndependent?: boolean;
	childcareDifficulty?: number;
};

type SearchStore = {
	searchParams: SearchParameter;
	handleChangeType: (type: string) => void;
	handleChangeAgeStart: (ageStart: number) => void;
	handleChangeAgeEnd: (ageEnd: number) => void;
	handleChangeWeight: (weight: number) => void;
	handleChangeSex: (gender: DogGender) => void;
	handleChangeBehavior: (behavior: Array<string>) => void;
	handleChangeNeutrification: (isNeutrification: boolean) => void;
	handleChangeWalkingTime: (walkingTime: number) => void;
	handleChangeHairLength: (hairLength: DogHairLength) => void;
	handleChangeIndependent: (isIndependent: boolean) => void;
	handleChangeChildcareDifficulty: (childcareDifficulty: number) => void;
};

const useSearchStore = create<SearchStore>((set) => ({
	searchParams: {
		type: undefined,
		ageStart: undefined,
		ageEnd: undefined,
		weight: undefined,
		sex: undefined,
		behavior: [],
		isNeutrification: undefined,
		walkingTime: 0,
		hairLength: undefined,
		isIndependent: undefined,
		childcareDifficulty: undefined,
	},
	handleChangeType: (type: string): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, type },
		}));
	},
	handleChangeAgeStart: (ageStart: number): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, ageStart },
		}));
	},
	handleChangeAgeEnd: (ageEnd: number): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, ageEnd },
		}));
	},
	handleChangeWeight: (weight: number): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, weight },
		}));
	},
	handleChangeSex: (gender: DogGender): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, sex: gender },
		}));
	},
	handleChangeBehavior: (behavior: Array<string>): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, behavior },
		}));
	},
	handleChangeNeutrification: (isNeutrification: boolean): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, isNeutrification },
		}));
	},
	handleChangeWalkingTime: (walkingTime: number): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, walkingTime },
		}));
	},
	handleChangeHairLength: (hairLength: DogHairLength): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, hairLength },
		}));
	},
	handleChangeIndependent: (isIndependent: boolean): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, isIndependent },
		}));
	},
	handleChangeChildcareDifficulty: (childcareDifficulty: number): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, childcareDifficulty },
		}));
	},
}));

export { useSearchStore, type DogGender, type DogHairLength };
