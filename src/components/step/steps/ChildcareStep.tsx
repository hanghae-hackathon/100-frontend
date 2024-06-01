import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface ChildcareStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const ChildcareStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: ChildcareStepProps): FunctionComponent => {
	const { searchParams, handleChangeChildcareDifficulty } = useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="강아지를 키워본 경험이 있으신가요?" size="large" />
			<StepHeader
				title="있다면 저도 좀 데려가세요 헥헥"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<RadioGroup
				defaultValue="option-one"
				onValueChange={(value) => {
					handleChangeChildcareDifficulty(Number(value));
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="0" id="option-one" />
					<Label htmlFor="option-one">키워 본 경험이 없어요</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="5" id="option-two" />
					<Label htmlFor="option-two">임시 보호 경험이 있어요</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="10" id="option-two" />
					<Label htmlFor="option-two">이미 키우고 있어요</Label>
				</div>
			</RadioGroup>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={searchParams.childcareDifficulty === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
