import { X } from "lucide-react";
import { useState } from "react";
import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface BehaviorStep {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const BehaviorStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: BehaviorStep): FunctionComponent => {
	const [value, setValue] = useState<string>("");
	const [values, setValues] = useState<Array<string>>([]);
	const { handleChangeBehavior } = useSearchStore();

	// 엔터키 입력시 추가
	const handleKeyPress = (
		event: React.KeyboardEvent<HTMLInputElement>
	): void => {
		if (event.key === "Enter" && event.nativeEvent.isComposing === false) {
			if (!value) {
				alert("값을 입력해주세요");
				return;
			}
			setValues([...values, value]);
			setValue("");
		}
	};

	const handleNext = (): void => {
		handleChangeBehavior(values);
		scrollNext();
	};

	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="어떤 성격의 친구가 좋으신가요?" size="large" />
			<StepHeader
				title="함께 살아가고 싶은 친구의 성격을 알려주세요"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<div className="flex gap-2 items-center">
				<Input
					value={value}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setValue(event.target.value);
					}}
					onKeyDown={handleKeyPress}
					placeholder="ex) 얌전함, 활발함, 사교적"
				/>
				<Button
					onClick={() => {
						if (!value) {
							alert("값을 입력해주세요");
							return;
						}
						setValues([...values, value]);
						setValue("");
					}}
				>
					추가
				</Button>
			</div>
			<div className="mt-3">
				{values.map((v, valueIndex: number) => (
					<div
						key={valueIndex}
						className="flex items-center w-[200px] justify-between"
					>
						<span className="text-center">{v}</span>
						<button
							onClick={() => {
								setValues(values.filter((_, index) => index !== valueIndex));
							}}
						>
							<X />
						</button>
					</div>
				))}
			</div>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={handleNext}
					className="flex-1  text-white py-4"
					disabled={values.length === 0}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
