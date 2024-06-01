import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Header } from "../ui/header";
import { ResultImg } from "./ResultImg";
import { ResultList } from "./ResultList";
import { ResultTitle } from "./ResultTitle";
import Home from "/home.svg";
import Welsh from "/welsh.avif";

type ResultProps = {
	type: "result" | "detail";
};

export const DogsResult = ({ type }: ResultProps) => {
	const title =
		type === "result" ? "이 아이는 어떠세요?" : "이 아이를 선택하셨군요!";

	return (
		<>
			<Header imgSrc={Home} alt={"홈으로"} />
			<div className="flex flex-col justify-center items-center gap-[20px] px-[35px]">
				<ResultTitle title={title} />
				<ResultImg src={Welsh} />
				<div className="w-full bg-[#B28A65] rounded-[20px] p-[20px]">
					<div className="flex justify-around items-center">
						<ResultList title={"성격"} results={["좋습니다.", "아마도"]} />
						<ResultList title={"행동"} results={["활발합니다.", "아마도"]} />
					</div>
				</div>
				<div className="w-full flex justify-between gap-3 mt-24">
					{type === "result" ? (
						<Button>010-1234-5678</Button>
					) : (
						<Button className="w-full">010-1234-5678</Button>
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
