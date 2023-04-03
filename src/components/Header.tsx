import Image from "next/image";
import { img } from "../components/image";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("../components/ThemeSwitcher"), {
	ssr: false,
});

interface IHeader {
	title?: string;
}
export default function Header({ title = "Home" }: IHeader) {
	return (
		<div className="flex justify-center p-4 gap-10 border-b dark:border-b-transparent sticky top-0 bg-white dark:bg-gray-800 shadow-md">
			<div className="flex gap-10 h-fit w-full items-center max-w-[1920px]">
				<h1 className="text-xl font-semibold">{title}</h1>
				<div className="relative grow">
					<div className="absolute top-1/2 h-full flex items-center left-0 ml-4 -translate-y-1/2">
						<RiSearch2Line color="rgb(107 114 128)" />
					</div>
					<input
						type="text"
						placeholder="Search..."
						className="w-full rounded-lg py-2 px-4 pl-12 focus:outline-none focus:outline-indigo-500 transition bg-gray-100 dark:bg-gray-900"
					/>
				</div>
				<button className="p-1 bg-indigo-500 rounded-lg h-8 aspect-square flex justify-center items-center">
					<RiNotification2Line size={16} color="white" />
				</button>
				<ThemeSwitcher />
				<div className="flex gap-2 items-center">
					<div className="rounded-full flex justify-center items-center flex-shrink-0 outline outline-indigo-500 h-9 w-9 p-0.5">
						<Image
							src={img.profile}
							width={100}
							height={100}
							alt="avatar"
							className="rounded-full overflow-hidden object-cover w-8 h-8"
						/>
					</div>
					<div className="w-full">John Doe</div>
					<button>
						<MdOutlineKeyboardArrowDown />
					</button>
				</div>
			</div>
		</div>
	);
}
