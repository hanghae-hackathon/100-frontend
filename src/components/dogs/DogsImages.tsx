import { useNavigate } from "@tanstack/react-router";
import { FunctionComponent } from "../../common/types";

type DogsImagesProps = {
	src: { id: number; img: string }[];
};

export const DogsImages = ({ src }: DogsImagesProps): FunctionComponent => {
	const navigate = useNavigate();

	return (
		<>
			{src.map((val) => (
				<button
					key={val.id}
					onClick={() =>
						navigate({ to: `/dogs/$id/detail`, params: { id: String(val.id) } })
					}
				>
					<img
						className="w-[150px] h-[150px] rounded-[30px] mt-[20px]"
						src={val.img}
						alt={"결과 이미지"}
					/>
				</button>
			))}
		</>
	);
};
