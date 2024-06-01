import { FunctionComponent } from "../../common/types";

type ResultListProps = {
	title: string;
	results: string[];
};

export const ResultList = ({
	title,
	results,
}: ResultListProps): FunctionComponent => {
	return (
		<ul>
			<p className="text-[12px] text-[#FFC107] font-bold">{title}</p>
			{results.map((result, index) => (
				<li
					key={index}
					className="text-[15px] text-[#FFF] font-medium list-disc mx-[1rem]"
				>
					{result}
				</li>
			))}
		</ul>
	);
};
