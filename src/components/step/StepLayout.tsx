import type { PropsWithChildren } from "react";
import type { FunctionComponent } from "../../common/types";
import { Dogfoot } from "../layout/Dogfoot";

interface StepLayoutProps {
	showDogfoot?: boolean;
}

export const StepLayout = ({
	children,
	showDogfoot = true,
}: PropsWithChildren<StepLayoutProps>): FunctionComponent => {
	return (
		<div className="w-full h-full flex flex-col items-center relative">
			{children}
			{showDogfoot && <Dogfoot />}
		</div>
	);
};
