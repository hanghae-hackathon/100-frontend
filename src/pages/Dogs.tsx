/* eslint-disable @typescript-eslint/no-floating-promises */
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { FunctionComponent } from "../common/types";
import { ResultTitle } from "../components/result/ResultTitle";
import { Button } from "../components/ui/button";
import { Header } from "../components/ui/header";
import { useParamsId as useParametersId } from "../hooks/useParamId";
import type { SearchResultType } from "../store/result";
import Home from "/home.svg";

export const Dogs = (): FunctionComponent => {
	const id = useParametersId();
	console.log(id);
	const [dogs, setDogs] = useState<Array<SearchResultType>>([]);

	useEffect(() => {
		void (async (): Promise<void> => {
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
			setDogs(respones as Array<SearchResultType>);
		})();
	}, []);

	const genderMapper = {
		man: "남아",
		woman: "여아",
	};

	const navigate = useNavigate();

	return (
		<div className="h-screen bg-[#F7F4E9] overflow-hidden">
			<Header imgSrc={Home} alt={"홈으로"} />
			<div className="flex flex-col justify-center items-center gap-[20px] px-[35px]">
				<ResultTitle title={"이 아이들은 어떠세요?"} />
				<div className="flex justify-between items-center flex-wrap gap-[15px] mt-5">
					{dogs.map((dog) => (
						<button
							onClick={() => {
								navigate({
									to: `/dogs/$id/detail`,
									params: { id: String(dog.id) },
								});
							}}
						>
							<img
								className="w-[150px] h-[150px] rounded-[30px] mt-[20px] mb-4"
								src={dog.image ?? ""}
								alt={"결과 이미지"}
							/>
							<div className="w-full bg-[#B28A65] rounded-[20px] p-[20px]">
								<div className="flex justify-around items-center text-white">
									{dog.name}, {dog.age}세,{" "}
									{genderMapper[dog.sex as "man" | "woman"]}
								</div>
							</div>
						</button>
					))}
					<div></div>
				</div>
				<div className="w-full mt-32">
					<Link to="-1">
						<Button className="w-full">이전</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
