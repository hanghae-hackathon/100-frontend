import Lottie from "react-lottie";
import dogs from "../../../assets/dogs.json";
import type { FunctionComponent } from "../../../common/types";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { CenterBox } from "../../layout/CenterBox";
import { Button } from "../../ui/button";
import { Combobox } from "../../ui/combobox";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

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
	const { searchParams } = useSearchStore();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: dogs,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<StepLayout showDogfoot={false}>
			<StepProgress current={current} count={count} />
			<StepHeader title="선호하는 견종이 있으신가요?" size="large" />
			<StepHeader
				title="사실 모든 강아지는 다 귀여워요"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<Combobox />

			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={scrollNext}
					className="flex-1  text-white py-4"
					disabled={searchParams.type === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
			<CenterBox>
				<Lottie options={defaultOptions} width={300} height={300} />
			</CenterBox>
		</StepLayout>
	);
};
