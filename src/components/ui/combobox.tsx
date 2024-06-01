import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import type { FunctionComponent } from "../../common/types";
import { useSearchStore } from "../../store/search";
import { cn } from "../../utils";
import { Button } from "./button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const dogs = [
	{
		value: "진돗개",
		label: "진돗개",
	},
	{
		value: "골든 리트리버",
		label: "골든 리트리버",
	},
	{
		value: "래브라도 리트리버",
		label: "래브라도 리트리버",
	},
	{
		value: "말트리버",
		label: "말트리버",
	},
	{
		value: "말티즈",
		label: "말티즈",
	},
	{
		value: "치와와",
		label: "치와와",
	},
	{
		value: "파피용",
		label: "파피용",
	},
	{
		value: "올드 잉글리쉬 쉽독",
		label: "올드 잉글리쉬 쉽독",
	},
	{
		value: "요크셔테리어",
		label: "요크셔테리어",
	},
	{
		value: "퍼그",
		label: "퍼그",
	},
	{
		value: "시츄",
		label: "시츄",
	},
	{
		value: "비글",
		label: "비글",
	},
	{
		value: "보더콜리",
		label: "보더콜리",
	},
	{
		value: "시바이누",
		label: "시바이누",
	},
	{
		value: "웰시코기",
		label: "웰시코기",
	},
	{
		value: "포메라니안",
		label: "포메라니안",
	},
	{
		value: "말라뮤트",
		label: "말라뮤트",
	},
	{
		value: "슈나우저",
		label: "슈나우저",
	},
	{
		value: "진도스키",
		label: "진도스키",
	},
	{
		value: "시고르자브종",
		label: "시고르자브종",
	},
];

export const Combobox = (): FunctionComponent => {
	const { searchParams, handleChangeType } = useSearchStore();
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{searchParams.type
						? dogs.find((dog) => dog.value === searchParams.type)?.label
						: "견종을 선택해주세요"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search dogs..." />
					<CommandEmpty>찾으시는 견종이 없어요</CommandEmpty>
					<CommandList>
						<CommandGroup>
							{dogs.map((dog) => (
								<CommandItem
									key={dog.value}
									value={dog.value}
									onSelect={(currentValue) => {
										handleChangeType(
											currentValue === searchParams.type ? "" : currentValue
										);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											searchParams.type === dog.value
												? "opacity-100"
												: "opacity-0"
										)}
									/>
									{dog.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
