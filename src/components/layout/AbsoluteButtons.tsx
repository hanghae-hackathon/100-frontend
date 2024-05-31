import type { PropsWithChildren } from "react";
import type { FunctionComponent } from "../../common/types";

export const AbsoluteButtons = ({
	children,
}: PropsWithChildren): FunctionComponent => {
	return (
		<div className="absolute bottom-10 w-full flex gap-3 px-4">{children}</div>
	);
};
