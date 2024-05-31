import Lottie from "react-lottie";
import walkingDog from "../../assets/waliking_dog.json";
import type { FunctionComponent } from "../../common/types";
import { Progress } from "../ui/progress";

type StepProgressProps = {
	current: number;
	count: number;
};

export const StepProgress = ({
	current,
	count,
}: StepProgressProps): FunctionComponent => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: walkingDog,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div>
			<Lottie options={defaultOptions} width={100} height={100} />
			<Progress value={Math.ceil((current / count) * 100)} max={count} />
		</div>
	);
};
