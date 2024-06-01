import type { ChangeEvent } from "react";
import { create } from "zustand";

type DogGender = "boy" | "girl";
type DogHairLength = "short" | "middle" | "long";

type SearchParameter = {
	type?: string;
	age?: number;
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
	videoSrc?: string;
	imgSrc?: string;
	name?: string;
	phone?: string;
};

type SearchStore = {
	searchParams: SearchParameter;
	handleChangeType: (type: string) => void;
	handleChangeAge: (event: ChangeEvent<HTMLInputElement>) => void;
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
	handleChangeVideoSrc: (event: ChangeEvent<HTMLInputElement>) => void;
	handleChangeImgSrc: (event: ChangeEvent<HTMLInputElement>) => void;
	handleChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
	handleChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClear: () => void;
};

const useSearchStore = create<SearchStore>()((set) => ({
	searchParams: {
		type: undefined,
		age: undefined,
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
		videoSrc: undefined,
		imgSrc: undefined,
		name: undefined,
		phone: undefined,
	},
	handleChangeType: (type: string): void => {
		set((state) => ({
			searchParams: { ...state.searchParams, type },
		}));
	},
	handleChangeAge: (event: ChangeEvent<HTMLInputElement>): void => {
		const age = Number(event.target.value);
		set((state) => ({
			searchParams: { ...state.searchParams, age },
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
	handleChangeVideoSrc: (event: ChangeEvent<HTMLInputElement>): void => {
		const videoSource = event.target.value;
		set((state) => ({
			searchParams: { ...state.searchParams, videoSrc: videoSource },
		}));
	},
	handleChangeImgSrc: (event: ChangeEvent<HTMLInputElement>): void => {
		const imgSource = event.target.value;
		set((state) => ({
			searchParams: { ...state.searchParams, imgSrc: imgSource },
		}));
	},
	handleChangeName: (event: ChangeEvent<HTMLInputElement>): void => {
		const name = event.target.value;
		set((state) => ({
			searchParams: { ...state.searchParams, name },
		}));
	},
	handleChangePhone: (event: ChangeEvent<HTMLInputElement>): void => {
		const phone = event.target.value;
		set((state) => ({
			searchParams: { ...state.searchParams, phone },
		}));
	},
	handleClear: (): void => {
		set(() => ({
			searchParams: {
				type: undefined,
				age: undefined,
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
				videoSrc: undefined,
				imgSrc: undefined,
				name: undefined,
			},
		}));
	},
}));

export { useSearchStore, type DogGender, type DogHairLength };
