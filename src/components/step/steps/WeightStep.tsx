import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface WeightStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const WeightStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: WeightStepProps): FunctionComponent => {
	const { searchParams, handleChangeWeight } = useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="어떤 크기의 친구가 좋으신가요?" size="large" />
			<StepHeader
				title="작으면 앙 귀엽고 크면 왕 귀여워요"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="선택해주세요" />
				</SelectTrigger>
				<SelectContent
					onChange={(value) => {
						handleChangeWeight(Number(value));
					}}
				>
					<SelectItem value="5">소형견</SelectItem>
					<SelectItem value="10">중형견</SelectItem>
					<SelectItem value="15">대형건</SelectItem>
				</SelectContent>
			</Select>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={searchParams.weight === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
