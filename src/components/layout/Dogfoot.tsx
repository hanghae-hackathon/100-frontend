import type { FunctionComponent } from "../../common/types";

export const Dogfoot = (): FunctionComponent => {
	return (
		<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl z-[-100]">
			🐾
		</div>
	);
};
