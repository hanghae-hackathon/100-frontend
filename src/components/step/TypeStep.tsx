import type { FunctionComponent } from "../../common/types";
import { AbsoluteButtons } from "../layout/AbsoluteButtons";
import { Dogfoot } from "../layout/Dogfoot";
import { Button } from "../ui/button";
import { Combobox } from "../ui/combobox";
import { StepHeader } from "./StepHeader";
import { StepLayout } from "./StepLayout";
import { StepProgress } from "./StepProgress";

interface TypeStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const TypeStep = ({
	count,
	current,
	scrollPrevious,
	scrollNext,
}: TypeStepProps): FunctionComponent => {
	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="선호하는 견종이 있으신가요?" size="medium" />
			<div className="my-4" />
			<Combobox />

			<AbsoluteButtons>
				<Button
					onClick={scrollPrevious}
					className="flex-1 bg-slate-600 text-white py-4"
				>
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1 bg-slate-600 text-white py-4"
				>
					다음
				</Button>
			</AbsoluteButtons>
			<Dogfoot />
		</StepLayout>
	);
};
