import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	let userTheme: any;
	let systemTheme: any;
	if (typeof window !== "undefined") {
		userTheme = localStorage.getItem("theme");
		systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	}
	const [isDarkMode, setDarkMode] = useState<boolean>(
		userTheme === "dark" || (userTheme == "dark" && systemTheme)
	);

	// function toggleDarkMode() {
	// 	if (document.documentElement.classList.contains("dark")) {
	// 		document.documentElement.classList.remove("dark");
	// 		document.documentElement.classList.add("light");
	// 		setDarkMode(false);
	// 	} else {
	// 		document.documentElement.classList.remove("light");
	// 		document.documentElement.classList.add("dark");
	// 		setDarkMode(true);
	// 	}
	// }
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
			localStorage.setItem("theme", "dark");
			// setDarkMode(true);
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			// setDarkMode(false);
		}
	}, [isDarkMode, systemTheme, userTheme]);
	console.log(isDarkMode);

	return (
		<div className="mr-2 sm:mr-0">
			<DarkModeSwitch
				checked={!isDarkMode}
				onChange={() => setDarkMode(!isDarkMode)}
				size={20}
				sunColor="white"
				moonColor="rgb(31 41 55)"
			/>
		</div>
	);
}
