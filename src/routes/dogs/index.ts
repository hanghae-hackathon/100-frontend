import { createFileRoute } from "@tanstack/react-router";
import { Dogs } from "../../pages/Dogs";

export const Route = createFileRoute("/dogs/")({
	component: Dogs,
});
