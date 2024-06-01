import { createFileRoute } from "@tanstack/react-router";
import { Result } from "../../pages/Result";

export const Route = createFileRoute("/$id/")({
	component: Result,
});
