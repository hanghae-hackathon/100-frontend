import { useParams } from "@tanstack/react-router";

type paramsProp = {
	id: number;
};

export const useParamsId = () => {
	const params: paramsProp = useParams({
		strict: false,
	});
	const { id } = params;

	return id;
};
