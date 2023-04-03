import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	// let userTheme: string | null;
	// if (typeof window !== "undefined") {
	// 	userTheme = localStorage.getItem("theme");
	// 	if (
	// 		userTheme == undefined ||
	// 		window.matchMedia("(prefers-color-scheme: light)").matches
	// 	) {
	// 		userTheme = "light";
	// 	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	// 		userTheme = "dark";
	// 	}
	// }
	return (
		<Html lang="en">
			<Head />
			<body className="dark:bg-gray-900 dark:text-gray-50">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
