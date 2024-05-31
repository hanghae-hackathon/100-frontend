import type { FunctionComponent } from "../common/types";
import { FirstStep } from "../components/step/FirstStep";
import { TypeStep } from "../components/step/TypeStep";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "../components/ui/carousel";
import { useStep } from "../hooks/use-step";

export const Home = (): FunctionComponent => {
	const { setApi, count, current, scrollPrevious, scrollNext } = useStep();
	const props = {
		count,
		current,
		scrollPrevious,
		scrollNext,
	};

	return (
		<Carousel setApi={setApi} className="bg-slate-100">
			<CarouselContent>
				<CarouselItem className="basis-full">
					<FirstStep scrollNext={scrollNext} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<TypeStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<FirstStep scrollNext={scrollNext} />
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
};
