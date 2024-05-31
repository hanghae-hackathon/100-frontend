import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface NeutrificationStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const NeutrificationStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: NeutrificationStepProps): FunctionComponent => {
	const { searchParams, handleChangeNeutrification } = useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="중성화 여부를 골라주세요" size="medium" />
			<div className="my-4" />
			<RadioGroup
				defaultValue="option-one"
				onValueChange={(value) => {
					handleChangeNeutrification(value === "true" ? true : false);
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="true" id="option-one" />
					<Label htmlFor="option-one">수술</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="false" id="option-two" />
					<Label htmlFor="option-two">미수술</Label>
				</div>
			</RadioGroup>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={searchParams.isNeutrification === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
