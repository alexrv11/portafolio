import React, { useState } from "react";

const worksData = [
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "HookArt",
		links: [
			{
				icon: "/img/out.svg",
				url: "https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://bykahomes.com/",
				label: "Enlace a la plataforma",
			},
			{
				url: "https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://www.behance.net/gallery/202888025/SAAS-UXUI-Booking-and-management-by-Brice",
				label: "Diseño web / Presentación",
			},
		],
	},
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "GoodLeap",
		links: [
			{
				url: "https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://www.behance.net/gallery/202888025/SAAS-UXUI-Booking-and-management-by-Brice",
				label: "Sr Golang Developer",
			},
			{
				icon: "/img/out.svg",
				url: "https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://bykahomes.com/",
				label: "GoodLeap",
			}
		],
	},
	// Puedes agregar más objetos de trabajo aquí
];

function WorkCard({
	images,
	title,
	links,
}: {
	images: string[];
	title: string;
	links: { icon?: string; url: string; label: string }[];
}) {
	const [hovered, setHovered] = useState(false);
	const lastImage = images[images.length - 1];
	return (
		<div
			className="card border border-gray-200 rounded-lg p-6 w-80 bg-white shadow transition-transform duration-200 flex flex-col"
			style={{
				transform: hovered ? "scale(1.05)" : "scale(1)",
				boxShadow: hovered
					? "0 8px 32px rgba(0,0,0,0.12)"
					: "0 2px 8px rgba(0,0,0,0.04)",
				minHeight: 320, // Ensures enough space for zoomed image
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<h4
				className={`my-3 font-semibold transition-all duration-200 ${
					hovered ? "text-2xl" : "text-xl"
				}`}
			>
				{title}
			</h4>
			<div className="flex gap-2 mb-3 justify-center min-h-32 items-center">
				{!hovered &&
					images.map((src, i) => (
						<img
							key={i}
							src={src}
							alt="work"
							className="rounded-md object-cover w-20 h-20 transition-all duration-200"
						/>
					))}
				{hovered && (
					<img
						src={lastImage}
						alt="work"
						className="rounded-md object-cover w-32 h-32 transition-all duration-200"
					/>
				)}
			</div>

			<div className="flex flex-col gap-1 mt-2">
				{links.map((link, i) => (
					<div key={i} className="flex items-center gap-2">
						{link.icon && (
							<img
								src={link.icon}
								alt="icon"
								className="w-4 h-4"
							/>
						)}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							{link.label}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Works() {
	const [works] = useState(worksData);

	return (
		<section className="my-10">
			<div>
				<h2 className="text-3xl font-bold mb-8">Work Experiences</h2>
				<div className="flex gap-8 flex-wrap mb-12">
					{works.map((work, idx) => (
						<WorkCard
							key={idx}
							images={work.images}
							title={work.title}
							links={work.links}
						/>
					))}
				</div>
			</div>
		</section>
	);
}