import { FunctionComponent } from "../../common/types";

type DogsImagesProps = {
	src: string[];
};

export const DogsImages = ({ src }: DogsImagesProps): FunctionComponent => {
	return (
		<>
			{src.map((val) => (
				<img
					className="w-[150px] h-[150px] rounded-[30px] mt-[20px]"
					src={val}
					alt={"결과 이미지"}
				/>
			))}
		</>
	);
};
