import type { PropsWithChildren } from "react";
import type { FunctionComponent } from "../../common/types";

export const StepLayout = ({
	children,
}: PropsWithChildren): FunctionComponent => {
	return (
		<div className="w-full h-full flex flex-col items-center relative">
			{children}
		</div>
	);
};
