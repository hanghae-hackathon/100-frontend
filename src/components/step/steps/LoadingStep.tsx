/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable unicorn/prevent-abbreviations */
import { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import waitDog from "../../../assets/wait_dog.json";
import type { FunctionComponent } from "../../../common/types";
import { useRequestIdStore } from "../../../store/request-id";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";

export const LoadingStep = (): FunctionComponent => {
	const { requestId } = useRequestIdStore();
	console.log("loading step", requestId);

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

	const polling = useCallback(async (): Promise<void> => {
		try {
			console.log(requestId);
			const response = await fetch(
				`https://58b3-210-217-92-1.ngrok-free.app/dogs/search/result/${1}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
				.then((res) => {
					console.log(res);
					return res.json();
				})
				.then((data) => {
					console.log(data);
					return data;
				});
		} catch (error) {
			console.error("error", error);
		}
	}, [requestId]);

	useEffect(() => {
		// 5초마다 polling
		if (!requestId) return;
		const interval = setInterval(() => {
			polling();
		}, 300);

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
