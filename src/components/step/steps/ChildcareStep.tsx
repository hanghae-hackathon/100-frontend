/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useNavigate } from "@tanstack/react-router";
import type { FunctionComponent } from "../../../common/types";
import { useRequestIdStore } from "../../../store/request-id";
import { useResultStore, type SearchResultType } from "../../../store/result";
import { useSearchStore } from "../../../store/search";
import { AbsoluteButtons } from "../../layout/AbsoluteButtons";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { StepHeader } from "../StepHeader";
import { StepLayout } from "../StepLayout";
import { StepProgress } from "../StepProgress";

interface ChildcareStepProps {
	count: number;
	current: number;
	scrollPrevious: () => void;
	scrollNext: () => void;
}

export const ChildcareStep = ({
	count,
	current,
	scrollNext,
	scrollPrevious,
}: ChildcareStepProps): FunctionComponent => {
	const navigate = useNavigate();
	const { searchParams, handleChangeChildcareDifficulty } = useSearchStore();
	const { setRequestId } = useRequestIdStore();
	const { handleChangeResult } = useResultStore();

	const handleNext = async (): Promise<void> => {
		try {
			scrollNext();
			const respones = await fetch(
				"https://58b3-210-217-92-1.ngrok-free.app/dogs",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"ngrok-skip-browser-warning": "69420",
					},
				}
				// eslint-disable-next-line unicorn/prevent-abbreviations
			).then((res) => res.json());

			const chat = await fetch("https://api.openai.com/v1/chat/completions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer `,
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "user",
							content: `
						${JSON.stringify(respones)}

						나는 유기견 강아지를 입양하는데, 필터링을 해주는 서비스를 해주고 있어.
						위의 JSON은 강아지 정보들이야.

						지금 내가 보내는 어떤 유저가 원하는 강아지야.
						${JSON.stringify(searchParams)}
							
						가장 최적의 강아지를 추천해주면 좋겠어.
						응답으로 가장 최적의 강아지 JSON정보만 보내주고 아무 말도 하지 말아줘.
						예시 응답)
						{
							"id": 34,
							"video": "https://www.youtube.com/watch?v=iPwajsJ7Z8E",
							"image": "https://example.com/image",
							"type": "보더콜리",
							"name": "뽀삐",
							"age": 10,
							"weight": 10,
							"sex": "woman",
							"neutrification": false,
							"walkingTime": 30,
							"hairLength": "long",
							"childcareDifficulty": 0,
							"independent": false
						} 
					`,
						},
					],
				}),
				// eslint-disable-next-line unicorn/prevent-abbreviations
			}).then((res) => res.json());

			const result = JSON.parse(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
				(chat as any).choices[0].message.content as string
			);
			handleChangeResult(result as SearchResultType);

			console.log("리스폰스에요", respones);
			setRequestId(
				(
					respones as {
						requestId: string;
					}
				).requestId
			);

			setTimeout(() => {
				void navigate({
					to: "/$id",
					params: {
						// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						id: (result as any).id as string,
					},
				});
			}, 3000);
		} catch (error) {
			console.error("error", error);
		}
		scrollNext();
	};
	console.log("searchParams", searchParams);

	return (
		<StepLayout>
			<StepProgress current={current} count={count} />
			<StepHeader title="강아지를 키워본 경험이 있으신가요?" size="large" />
			<StepHeader
				title="있다면 저도 좀 데려가세요 헥헥"
				size="medium"
				isSub={true}
			/>
			<div className="my-4" />
			<RadioGroup
				defaultValue="option-one"
				onValueChange={(value) => {
					handleChangeChildcareDifficulty(Number(value));
				}}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="0" id="option-one" />
					<Label htmlFor="option-one">키워 본 경험이 없어요</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="5" id="option-two" />
					<Label htmlFor="option-two">임시 보호 경험이 있어요</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="10" id="option-two" />
					<Label htmlFor="option-two">이미 키우고 있어요</Label>
				</div>
			</RadioGroup>
			<AbsoluteButtons>
				<Button onClick={scrollPrevious} className="flex-1  text-white py-4">
					이전
				</Button>
				<Button
					onClick={() => {
						// eslint-disable-next-line @typescript-eslint/no-floating-promises
						handleNext();
					}}
					className="flex-1  text-white py-4"
					disabled={searchParams.childcareDifficulty === undefined}
				>
					다음
				</Button>
			</AbsoluteButtons>
		</StepLayout>
	);
};
