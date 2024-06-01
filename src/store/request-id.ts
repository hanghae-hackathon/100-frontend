import { create } from "zustand";
type requestIdStoreType = {
	requestId: string;
	setRequestId: (requestId: string) => void;
};

export const useRequestIdStore = create<requestIdStoreType>((set) => ({
	requestId: "",
	setRequestId: (requestId): void => {
		set(() => ({
			requestId,
		}));
	},
}));
