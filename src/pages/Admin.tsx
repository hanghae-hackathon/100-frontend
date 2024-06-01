/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, type ChangeEvent } from "react";
import type { FunctionComponent } from "../common/types";
import { AdminInput } from "../components/ui/adminInput";
import { Button } from "../components/ui/button";
import { Combobox } from "../components/ui/combobox";
import { Header } from "../components/ui/header";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";
import {
	useSearchStore,
	type DogGender,
	type DogHairLength,
} from "../store/search";
import ArrowDown from "/arrowBack.svg";

export const Admin = (): FunctionComponent => {
	const {
		searchParams,
		handleChangeAge,
		handleChangeChildcareDifficulty,
		handleChangeNeutrification,
		handleChangeWeight,
		handleChangeVideoSrc,
		handleChangeImgSrc,
		handleChangeSex,
		handleChangeName,
		handleChangeWalkingTime,
		handleChangeHairLength,
		handleClear,
		handleChangePhone,
	} = useSearchStore();

	useEffect(() => {
		handleClear();
	}, []);

	const handleSubmit = async (): Promise<void> => {
		await fetch("https://58b3-210-217-92-1.ngrok-free.app/admin/dog", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"ngrok-skip-browser-warning": "69420",
			},
			body: JSON.stringify(searchParams),
		});
	};

	return (
		<div className="h-screen bg-[#F7F4E9] overflow-hidden">
			<Header imgSrc={ArrowDown} alt={"뒤로가기 버튼"} />
			<div className="flex flex-col p-9">
				<div className="flex flex-col justify-center items-center gap-y-[15px]">
					<AdminInput
						title={"🎥 비디오 주소"}
						inputVal={searchParams.videoSrc || ""}
						setInputVal={handleChangeVideoSrc}
						placeholder={"비디오 주소 입력"}
					/>
					<AdminInput
						title={"📷 이미지 주소"}
						inputVal={searchParams.imgSrc || ""}
						setInputVal={handleChangeImgSrc}
						placeholder={"이미지 주소 입력"}
					/>
					<AdminInput
						title={"📞 연락처"}
						inputVal={searchParams.phone || ""}
						setInputVal={handleChangePhone}
						placeholder={"연락처 입력"}
					/>
					<div className="flex justify-center items-start gap-x-[20px]">
						<div className="w-[40%] flex flex-col gap-y-[10px]">
							<AdminInput
								title={"이름"}
								inputVal={searchParams.name || ""}
								setInputVal={handleChangeName}
								placeholder={"이름 입력"}
							/>

							<AdminInput
								title={"나이"}
								inputVal={searchParams.age || ""}
								setInputVal={handleChangeAge}
								placeholder={"나이 입력"}
							/>

							<AdminInput
								title={"산책 시간"}
								inputVal={searchParams.walkingTime || ""}
								setInputVal={(event: ChangeEvent<HTMLInputElement>) => {
									handleChangeWalkingTime(Number(event.target.value));
								}}
								placeholder={"산책 시간 입력"}
							/>
							<div className="flex flex-col justify-start items-start gap-[10px]">
								<p className="text-lg font-bold text-[#B28A65]">중성화</p>
								<RadioGroup
									defaultValue="option-one"
									onValueChange={(value) => {
										handleChangeNeutrification(value === "true" ? true : false);
									}}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="true" id="option-one" />
										<Label htmlFor="option-one">수술</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="false" id="option-two" />
										<Label htmlFor="option-two">미수술</Label>
									</div>
								</RadioGroup>
							</div>
							<div className="flex flex-col justify-start items-start gap-[10px]">
								<p className="text-lg font-bold text-[#B28A65]">육아 난이도</p>
								<RadioGroup
									defaultValue="option-one"
									onValueChange={(value) => {
										handleChangeChildcareDifficulty(Number(value));
									}}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="10" id="option-one" />
										<Label htmlFor="option-one">상</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="5" id="option-two" />
										<Label htmlFor="option-two">중</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="0" id="option-two" />
										<Label htmlFor="option-two">하</Label>
									</div>
								</RadioGroup>
							</div>
						</div>
						<div className="w-[40%] flex flex-col gap-y-[10px]">
							<p className="text-lg font-bold text-[#B28A65]">종류</p>
							<Combobox />
							<p className="text-lg font-bold text-[#B28A65]">무게</p>
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

							<div className="flex flex-col justify-center items-start gap-[10px]">
								<p className="text-lg font-bold text-[#B28A65]">털 길이</p>
								<RadioGroup
									defaultValue="option-one"
									onValueChange={(value) => {
										handleChangeHairLength(value as DogHairLength);
									}}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="short" id="option-one" />
										<Label htmlFor="option-one">단모</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="middle" id="option-two" />
										<Label htmlFor="option-two">중모</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="long" id="option-two" />
										<Label htmlFor="option-two">장모</Label>
									</div>
								</RadioGroup>
							</div>
							<div className="flex flex-col justify-center items-start gap-[10px]">
								<p className="text-lg font-bold text-[#B28A65]">성별</p>
								<RadioGroup
									defaultValue="option-one"
									onValueChange={(value) => {
										handleChangeSex(value as DogGender);
									}}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="man" id="option-one" />
										<Label htmlFor="option-one">남아</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="woman" id="option-two" />
										<Label htmlFor="option-two">여아</Label>
									</div>
								</RadioGroup>
							</div>
						</div>
					</div>
				</div>
				{/* 업로드 API 연결 */}
				<Button onClick={handleSubmit} className="w-full my-[80px]">
					업로드
				</Button>
			</div>
		</div>
	);
};
