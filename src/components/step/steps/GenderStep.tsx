import type { FunctionComponent } from "../../../common/types";
import { useSearchStore, type DogGender } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface GenderStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const GenderStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: GenderStepProps): FunctionComponent => {
	const { searchParams, handleChangeSex } = useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="선호하시는 성별을 알려주세요" size="large" />
			<StepHeader
				title="왕자님과 공주님 중 골라보세요!"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<RadioGroup
				defaultValue="option-one"
				onValueChange={(value) => {
					handleChangeSex(value as DogGender);
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="boy" id="option-one" />
					<Label htmlFor="option-one">남아</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="girl" id="option-two" />
					<Label htmlFor="option-two">여아</Label>
				</div>
			</RadioGroup>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1 text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1 text-white py-4"
					disabled={searchParams.sex === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
