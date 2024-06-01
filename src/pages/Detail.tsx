import type { FunctionComponent } from "../common/types";
import { DogsResult } from "../components/result/DogsResult";

export const Detail = (): FunctionComponent => {
	return (
		<div className="h-screen bg-[#F7F4E9] overflow-hidden">
			<DogsResult type="detail" />
		</div>
	);
};
