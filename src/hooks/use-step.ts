import { useEffect, useState } from "react";
import { type CarouselApi } from "../components/ui/carousel";

const useStep = (): {
	api: CarouselApi | undefined;
	setApi: (api: CarouselApi) => void;
	current: number;
	count: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
} => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const scrollPrevious = (): void => {
		api?.scrollPrev();
	};

	const scrollNext = (): void => {
		api?.scrollNext();
	};

	return {
		api,
		setApi,
		current,
		count,
		scrollPrevious,
		scrollNext,
	};
};

export { useStep };
