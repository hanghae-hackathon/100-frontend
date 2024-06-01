import { FunctionComponent } from "../../common/types";

type ResultImgProps = {
	src: string;
};

export const ResultImg = ({ src }: ResultImgProps): FunctionComponent => {
	return (
		<img
			className="w-[320px] h-[300px] rounded-[30px] mt-[20px]"
			src={src}
			alt={"결과 이미지"}
		/>
	);
};
