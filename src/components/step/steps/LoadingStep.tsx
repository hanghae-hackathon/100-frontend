import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import waitDog from "../../../assets/wait_dog.json";
import type { FunctionComponent } from "../../../common/types";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";

export const LoadingStep = (): FunctionComponent => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: waitDog,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const [dots, setDots] = useState<string>(".");
	useEffect(() => {
		const interval = setInterval(() => {
			setDots((dots) => {
				if (dots.length >= 3) {
					return ".";
				}
				return dots + ".";
			});
		}, 500);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<StepLayout showDogfoot={false}>
			<div>
				<div className="flex items-end">
					<StepHeader title="주인님을 찾는 중" size="large" />
					<span>{dots}</span>
				</div>
				<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl z-[-100]">
					<Lottie options={defaultOptions} width={250} height={250} />
				</div>
			</div>
		</StepLayout>
	);
};
