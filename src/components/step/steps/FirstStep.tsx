import Lottie from "react-lottie";
import mainDog from "../../../assets/main_dog.json";
import type { FunctionComponent } from "../../../common/types";
import { Button } from "../../ui/button";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";

type FirstStepProps = {
	scrollNext: () => void;
};

export const FirstStep = ({
	scrollNext,
}: FirstStepProps): FunctionComponent => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: mainDog,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<StepLayout showDogfoot={false}>
			<StepHeader title="반려멍" size="large" />
			<StepHeader
				title="나와 찰떡 반려멍이 기다리고 있어요"
				size="medium"
				isSub={true}
			/>
			<div className="h-full flex items-center">
				<Lottie options={defaultOptions} width={200} height={200} />
			</div>
			<div className="absolute bottom-10 w-full flex gap-3 px-4">
				<Button className="flex-1" onClick={scrollNext} size="lg">
					다음
				</Button>
			</div>
		</StepLayout>
	);
};
