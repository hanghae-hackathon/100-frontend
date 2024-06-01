import { createFileRoute } from "@tanstack/react-router";
import { Detail } from "../../pages/Detail";

export const Route = createFileRoute("/detail/")({
	component: Detail,
});
