import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface AgeStep {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const AgeStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: AgeStep): FunctionComponent => {
	const { searchParams, handleChangeAgeStart, handleChangeAgeEnd } =
		useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="선호하시는 연령대를 알려주세요" size="medium" />
			<div className="my-4" />
			<div className="flex gap-2 items-center">
				<Input
					value={searchParams.ageStart}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						handleChangeAgeStart(Number(event.target.value));
					}}
					placeholder="ex) 0살"
				/>
				~
				<Input
					value={searchParams.ageEnd}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						handleChangeAgeEnd(Number(event.target.value));
					}}
					placeholder="ex) 4살"
				/>
			</div>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={
						searchParams.ageStart === undefined ||
						searchParams.ageEnd === undefined
					}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
