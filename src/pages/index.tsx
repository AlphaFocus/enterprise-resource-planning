import Authenticated from "@/layout/AuthenticatedLayout";
import { MdAttachMoney } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	BarElement,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Image from "next/image";
import { img } from "@/components/image";
import { BsArrowUpShort } from "react-icons/bs";

export default function Home() {
	const i = [1, 2, 3, 4, 5, 6, 7, 8];
	function LineChart(): JSX.Element {
		ChartJS.register(
			CategoryScale,
			LinearScale,
			PointElement,
			BarElement,
			Title,
			Tooltip,
			Legend,
			Filler
		);

		const options = {
			responsive: true,
			hover: {
				intersect: false,
			},
			plugins: {
				legend: {
					// display: false,
					labels: {
						boxWidth: 15,
					},
					position: "top" as const,
					align: "end" as const,
				},
				tooltip: {
					enabled: true,
				},
			},
			scales: {
				x: {
					// display: false,
					border: {
						display: false,
					},
					grid: {
						display: false,
					},
				},
				y: {
					// display: false,
					border: {
						display: false,
					},
					grid: {
						// display: false,
					},
				},
			},
			elements: {
				point: {
					radius: 0,
				},
			},
		};

		const labels = [
			// "January",
			// "February",
			// "March",
			// "April",
			// "May",
			// "June",
			// "July",
		];

		for (let i = 1; i <= 30; i++) {
			labels.push(i);
		}

		function color(
			color: string,
			rgba?: boolean,
			alpha: string = ".5"
		): string {
			if (rgba == true) {
				return `rgba(${color}, ${alpha})`;
			} else return `rgb(${color})`;
		}
		const data = {
			labels,
			datasets: [
				{
					label: "Production",
					data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
					backgroundColor: color("99, 102, 241", true, ".8"),
					// backgroundColor: color("99, 102, 241", true, ".1"),
					fill: true,
					tension: 0,
				},
				{
					label: "Sales",
					data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
					backgroundColor: color("251, 146, 60", true, ".8"),
					// backgroundColor: color("251, 146, 60", true, ".1"),
					fill: true,
					tension: 0,
				},
			],
		};
		return <Bar options={options} data={data} />;
	}

	function DonutChart(): JSX.Element {
		ChartJS.register(ArcElement, Tooltip, Legend);
		const options = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: "right" as const,
					// display: false,
				},
			},
		};
		const labels = ["Income", "Outcome", "Savings"];
		const data = {
			labels: labels,
			datasets: [
				{
					label: "Total",
					data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
					backgroundColor: ["#2dd4bf", "#f472b6", "#60a5fa"],
					borderWidth: 0,
				},
			],
		};
		return <Doughnut options={options} data={data} />;
	}

	function Card(): JSX.Element {
		function LineChart(): JSX.Element {
			ChartJS.register(
				CategoryScale,
				LinearScale,
				PointElement,
				LineElement,
				Title,
				Tooltip,
				Legend,
				Filler
			);

			const options = {
				responsive: true,
				hover: {
					intersect: false,
				},
				plugins: {
					legend: {
						display: false,
						position: "bottom" as const,
					},
					tooltip: {
						// enabled: true,
					},
				},
				scales: {
					x: {
						display: false,
						ticks: {
							dispay: false,
							color: "red",
						},
						border: {
							display: false,
						},
						grid: {
							display: false,
						},
					},
					y: {
						display: false,
						border: {
							display: false,
						},
						grid: {
							display: false,
						},
					},
				},
				elements: {
					point: {
						radius: 0,
					},
				},
			};

			const labels = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
			];

			function color(
				color: string,
				rgba?: boolean,
				alpha: string = ".5"
			): string {
				if (rgba == true) {
					return `rgba(${color}, ${alpha})`;
				} else return `rgb(${color})`;
			}
			const data = {
				labels,
				datasets: [
					{
						label: "Sales",
						data: labels.map(() =>
							faker.datatype.number({ min: 0, max: 1000 })
						),
						borderColor: color("99, 102, 241"),
						// backgroundColor: color("34, 197, 94", true, ".1"),
						// fill: true,
						tension: 0.4,
					},
				],
			};
			return <Line options={options} data={data} />;
		}
		return (
			<div className="flex flex-col p-4 border dark:border-transparent h-fit rounded-xl dark:bg-gray-800">
				<div className="flex items-center mb-4">
					<MdAttachMoney color="rgb(34 197 94" size={20} />
					<span className="font-semibold text-xl ml-2">Sales</span>
				</div>
				<div className="flex">
					<div className="w-2/3">
						<div className="text-lg font-semibold">IDR 2.700.000</div>
						<div className="flex items-center text-xs text-gray-500">
							<IoMdArrowDropup className="" color="rgb(34 197 94)" />
							<span className="text-green-500 mr-2">50% </span>
							<span> since 24 hours</span>
						</div>
					</div>
					<div className="p-2 flex items-center w-1/3 ml-auto h-fit">
						<LineChart />
					</div>
				</div>
			</div>
		);
	}
	return (
		<Authenticated>
			<div className="flex gap-4 w-full h-full">
				<div className="gap-4 md:w-5/6 flex flex-col rounded-xl overflow-y-auto dark:scrollbar-dark">
					<div className="rounded-xl grow border dark:border-gray-800 p-4 flex flex-col gap-4">
						<h1 className="text-2xl font-semibold">Overall Balance</h1>
						<div className="grid grid-cols-2 xl:grid-cols-4 gap-4 grow">
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
					<div className="flex flex-col gap-4 rounded-xl p-4 border dark:border-gray-800">
						<h1 className="text-2xl font-semibold">Monthly Reports</h1>
						<div className="grid 2xl:grid-cols-4 gap-4">
							<div className="grid 2xl:col-span-3 2xl:grid-cols-3 xl:grid-cols-1 gap-4 w-full">
								<div className="col-span-2 rounded-xl border p-4 dark:bg-gray-800 dark:border-transparent">
									<h1 className="text-xl font-semibold mb-4">Statistics</h1>
									<LineChart />
								</div>
								<div className="grid col-span-2 2xl:col-span-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 border dark:border-transparent gap-4">
									<div className="flex flex-col p-4 dark:bg-gray-800 dark:border-transparent rounded-xl">
										<div>
											<h1 className="text-xl font-semibold mb-4">Analytics</h1>
										</div>
										<div className="h-fit">
											<DonutChart />
										</div>
									</div>
									<div className="rounded-xl dark:bg-gray-800 p-4 w-full flex flex-col overflow-auto">
										<h1 className="text-xl font-semibold">Target</h1>
										<div className="mt-2">
											<div className="flex justify-between text-gray-400 text-sm mb-0.5">
												<span>Saving</span> <span>100 of 450</span>
											</div>
											<div className="rounded-xl overflow-hidden bg-gray-700">
												<div className="bg-gradient-to-r from-teal-500 to-blue-500 text-xs leading-none py-1 text-center text-white w-[45%]">
													45%
												</div>
											</div>
										</div>
										<div className="mt-2">
											<div className="flex justify-between text-gray-400 text-sm mb-0.5">
												<span>Production</span> <span>100 of 450</span>
											</div>
											<div className="rounded-xl overflow-hidden bg-gray-700">
												<div className="bg-gradient-to-r from-pink-500 to to-indigo-500 text-xs leading-none py-1 text-center text-white w-[60%]">
													60%
												</div>
											</div>
										</div>
										<div className="mt-2">
											<div className="flex justify-between text-gray-400 text-sm mb-0.5">
												<span>Sales</span> <span>100 of 450</span>
											</div>
											<div className="rounded-xl overflow-hidden bg-gray-700">
												<div className="bg-gradient-to-r from-yellow-500 to to-orange-500 text-xs leading-none py-1 text-center text-white w-[80%]">
													80%
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="dark:bg-gray-800 flex flex-col rounded-xl grow 2xl:grow-0">
								<div className="flex justify-between items-center border-b mb-1 dark:border-b-gray-600 p-4">
									<h1 className="font-semibold">Employee Ranking</h1>
									<button className="text-xs opacity-30 hover:opacity-50 transition">
										See more
									</button>
								</div>
								<div className="flex flex-col flex-auto 2xl:max-h-96 rounded-xl dark:scrollbar-dark gap-1 overflow-auto">
									{i.map((e: number) => {
										return (
											<div
												key={e}
												className="flex py-2 px-3 rounded-xl bg-gray-700 items-center"
											>
												<div className="flex items-center mr-4">
													<BsArrowUpShort
														color="#22c55e"
														className="mr-2"
														size={22}
													/>
													<span>{e}.</span>
												</div>
												<Image
													src={img.profile}
													width={100}
													height={100}
													alt="avatar"
													className="rounded-full overflow-hidden object-cover w-8 h-8 mr-2 shrink-0"
												/>
												<div className="flex flex-col shrink-0">
													<span className="">Employee Name</span>
													<span className="text-xs dark:text-gray-400">
														Employee Role
													</span>
												</div>
												<span className="ml-auto text-xl font-semibold">
													258
												</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="dark:bg-gray-800 rounded-md h-full grow hidden md:block"></div>
			</div>
		</Authenticated>
	);
}
