import type { ChangeEvent } from "react";
import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface WalkingTimeProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const WalkingTimeStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: WalkingTimeProps): FunctionComponent => {
	const { searchParams, handleChangeWalkingTime } = useSearchStore();
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="하루 평균 산책 시간을 알려주세요" size="medium" />
			<div className="my-4" />
			<div className="p-2">
				<Input
					type="range"
					min={0}
					step={10}
					max={300}
					placeholder="ex) 최대 30분"
					value={searchParams.walkingTime}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						handleChangeWalkingTime(Number(event.target.value));
					}}
					className="w-full !accent-[#B28A65]"
				/>
				<div>
					<h5>
						<span className="font-medium">최대 산책 시간:</span>{" "}
						<span className="text-lg font-bold">
							{searchParams.walkingTime}분
						</span>
					</h5>
				</div>
			</div>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={searchParams.walkingTime === 0}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
