import type { FunctionComponent } from "../../../common/types";
import { useSearchStore, type DogHairLength } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { CenterBox } from "../../layout/CenterBox";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

import Lottie from "react-lottie";
import hairDog from "../../../assets/hair_dog.json";

interface HairLengthStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const HairLengthStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: HairLengthStepProps): FunctionComponent => {
	const { searchParams, handleChangeHairLength } = useSearchStore();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: hairDog,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<StepLayout showDogfoot={false}>
			<StepProgress current={current} count={count} />
			<StepHeader title="어떤 털의 강아지를 좋아하세요?" size="large" />
			<StepHeader
				title="'무모한'강아지와 털빵이들 중 어떤 쪽이 좋으신가요?"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<RadioGroup
				defaultValue="option-one"
				onValueChange={(value) => {
					handleChangeHairLength(value as DogHairLength);
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="short" id="option-one" />
					<Label htmlFor="option-one">단모</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="middle" id="option-two" />
					<Label htmlFor="option-two">중모</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="long" id="option-two" />
					<Label htmlFor="option-two">장모</Label>
				</div>
			</RadioGroup>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1 text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1 text-white py-4"
					disabled={searchParams.hairLength === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
			<CenterBox>
				<Lottie options={defaultOptions} height={300} width={300} />
			</CenterBox>
		</StepLayout>
	);
};
