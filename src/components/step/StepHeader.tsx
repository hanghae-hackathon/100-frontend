import type { FunctionComponent } from "../../common/types";
import { cn } from "../../utils";

type StepHeaderProps = {
	title: string;
	size: "small" | "medium" | "large";
	isSub?: boolean;
};

export const StepHeader = ({
	title,
	size,
	isSub = false,
}: StepHeaderProps): FunctionComponent => {
	const textSize = {
		small: "text-lg",
		medium: "text-xl",
		large: "text-3xl",
	};

	return (
		<h1
			className={cn(
				"whitespace-pre-wrap",
				"text-left",
				"text-pretty",
				"font-bold",
				textSize[size],
				isSub ? "text-[#7F6248] mt-4" : "text-[#B28A65] mt-8"
			)}
		>
			{title}
		</h1>
	);
};
