import type { FunctionComponent } from "../common/types";

import { DogsResult } from "../components/result/DogsResult";

export const Result = (): FunctionComponent => {
	return (
		<div className="h-screen bg-[#F7F4E9] overflow-hidden">
			<DogsResult type="result" />
		</div>
	);
};
