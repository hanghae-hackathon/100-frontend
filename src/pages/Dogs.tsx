import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../common/types";
import { DogsImages } from "../components/dogs/DogsImages";
import { ResultTitle } from "../components/result/ResultTitle";
import { Button } from "../components/ui/button";
import { Header } from "../components/ui/header";
import { useParamsId } from "../hooks/useParamId";
import Home from "/home.svg";
import Welsh from "/welsh.avif";

export const Dogs = (): FunctionComponent => {
	const id = useParamsId();
	console.log(id);
	return (
		<div className="h-screen bg-[#F7F4E9] overflow-hidden">
			<Header imgSrc={Home} alt={"홈으로"} />
			<div className="flex flex-col justify-center items-center gap-[20px] px-[35px]">
				<ResultTitle title={"이 아이들은 어떠세요?"} />
				<div className="flex justify-between items-center flex-wrap gap-[15px] mt-5">
					<DogsImages src={[Welsh, Welsh, Welsh, Welsh]} />
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
