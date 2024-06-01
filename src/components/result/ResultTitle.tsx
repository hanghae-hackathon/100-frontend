import { FunctionComponent } from "../../common/types";

type ResultTitleProps = {
	title: string;
};

export const ResultTitle = ({ title }: ResultTitleProps): FunctionComponent => {
	return (
		<h1 className="text-[30px] font-bold mt-10 text-[#B28A65]">{title}</h1>
	);
};
