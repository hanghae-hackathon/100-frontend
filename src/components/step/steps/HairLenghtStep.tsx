import type { FunctionComponent } from "../../../common/types";
import { useSearchStore, type DogHairLength } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

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
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="어떤 털을 가진 친구를 좋아하시나요?" size="medium" />
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
		</StepLayout>
	);
};
