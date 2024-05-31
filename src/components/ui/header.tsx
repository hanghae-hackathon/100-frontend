interface HeaderProps {
	imgSrc: string;
	alt: string;
}

export const Header = ({ imgSrc, alt }: HeaderProps) => {
	return (
		<div className="w-full flex flex-1 justify-between items-center p-5">
			<img src={imgSrc} alt={alt} />

			<p className="text-lg font-bold">서비스명</p>
			<div />
		</div>
	);
};
