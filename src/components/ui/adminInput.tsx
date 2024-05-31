import { ChangeEvent } from "react";

interface AdminInputProps {
	inputVal: string | number;
	setInputVal: (e: ChangeEvent<HTMLInputElement>) => void;
	title: string;
	placeholder: string;
}

export const AdminInput = ({
	inputVal,
	setInputVal,
	title,
	placeholder,
}: AdminInputProps) => {
	return (
		<div className="w-full flex flex-col gap-y-[10px]">
			<p className="text-lg font-bold text-[#B28A65]">{title}</p>
			<input
				value={inputVal}
				onChange={setInputVal}
				className="fs-[12px] text-white rounded-[20px] bg-[#B28A65] px-[12px] py-[8px] placeholder-white"
				placeholder={placeholder}
			/>
		</div>
	);
};
