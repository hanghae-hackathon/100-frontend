import type { FunctionComponent } from "../common/types";
import { AgeStep } from "../components/step/steps/AgeStep";
import { BehaviorStep } from "../components/step/steps/BehaviorStep";
import { ChildcareStep } from "../components/step/steps/ChildcareStep";
import { FirstStep } from "../components/step/steps/FirstStep";
import { GenderStep } from "../components/step/steps/GenderStep";
import { HairLengthStep } from "../components/step/steps/HairLenghtStep";
import { LoadingStep } from "../components/step/steps/LoadingStep";
import { NeutrificationStep } from "../components/step/steps/NeutrificationStep";
import { TypeStep } from "../components/step/steps/TypeStep";
import { WalkingTimeStep } from "../components/step/steps/WalkingTimeStep";
import { WeightStep } from "../components/step/steps/WeightStep";
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
		<Carousel setApi={setApi} className="bg-[#F7F4E9]">
			<CarouselContent>
				<CarouselItem className="basis-full">
					<FirstStep scrollNext={scrollNext} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<TypeStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<AgeStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<WeightStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<GenderStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<NeutrificationStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<WalkingTimeStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<HairLengthStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<BehaviorStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<ChildcareStep {...props} />
				</CarouselItem>
				<CarouselItem className="basis-full h-screen">
					<LoadingStep />
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
};
