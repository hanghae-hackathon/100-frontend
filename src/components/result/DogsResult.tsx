import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import { useResultStore } from "../../store/result";
import { Button } from "../ui/button";
import { Header } from "../ui/header";
import { ResultImg } from "./ResultImg";
import { ResultTitle } from "./ResultTitle";
import Home from "/home.svg";

type ResultProps = {
	type: "result" | "detail";
};

export const DogsResult = ({ type }: ResultProps): FunctionComponent => {
	const { result } = useResultStore();
	const title =
		type === "result"
			? `${result?.name}랑 천생연분!`
			: `${result?.name}가 궁금하셨군요?`;
	console.log(result);

	return (
		<>
			<Header imgSrc={Home} alt={"홈으로"} />
			<div className="flex flex-col justify-center items-center gap-[20px] px-[35px]">
				<ResultTitle title={title} />
				<ResultImg src={result.image ?? ""} />
				<div className="w-full bg-[#B28A65] rounded-[20px] p-[20px]">
					<div className="flex justify-around items-center text-white">
						{result.description}
						{/* <ResultList title={"성격"} results={["좋습니다.", "아마도"]} />
						<ResultList title={"행동"} results={["활발합니다.", "아마도"]} /> */}
					</div>
				</div>
				<div className="w-full flex justify-between gap-3 mt-24">
					{type === "result" ? (
						<Button>{result?.phone}</Button>
					) : (
						<Button className="w-full">{result?.phone}</Button>
					)}
					{type === "result" && (
						<Link to="/dogs">
							<Button>다른친구들 보러가기</Button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
