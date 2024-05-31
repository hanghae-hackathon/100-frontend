import type { FunctionComponent } from "../../common/types";
import { cn } from "../../utils";

type StepHeaderProps = {
	title: string;
	size: "small" | "medium" | "large";
};

export const StepHeader = ({
	title,
	size,
}: StepHeaderProps): FunctionComponent => {
	const textSize = {
		small: "text-lg",
		medium: "text-xl",
		large: "text-4xl",
	};
	return (
		<h1
			className={cn("text-4xl font-bold mt-8 text-[#B28A65]", textSize[size])}
		>
			{title}
		</h1>
	);
};
