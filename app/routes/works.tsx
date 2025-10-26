import React, { useState } from "react";
import { motion } from "framer-motion";

const worksData = [
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "Tracera",
		description: "Sustainability Platform",
	},
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "GoodLeap",
		description: "Solar Financing",
	},
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "HookArt",
		description: "Art Gallery",
	},
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "MercadoPago",
		description: "Payment Platform",
	},
	{
		images: ["https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=1024x1024&w=is&k=20&c=tObIEgQAXKm_OQwuZ0xNXA-U0QMXx2Okgm_L6Ew9Ygk=", "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=1024x1024&w=is&k=20&c=CoqB4hDuRFuxxEZ4Fu84uhLDftgeyAtl8TXEQq-JdtM="],
		title: "JalaSoft",
		description: "Software Company",
	},
	// Puedes agregar más objetos de trabajo aquí
];

function WorkCard({
	images,
	title,
	description,
	links,
}: {
	images: string[];
	title: string;
	description?: string;
	links?: { icon?: string; url: string; label: string }[];
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
				className={`my-3 font-semibold transition-all duration-200 ${hovered ? "text-2xl" : "text-xl"
					}`}
			>
				{title}
			</h4>
			{description && (
				<p className="text-gray-600 text-sm mb-2">{description}</p>
			)}
			<div className="flex gap-2 mb-3 justify-center min-h-32 items-center relative">
				{images.map((src, i) => {
					const isLastImage = i === images.length - 1;
					
					// Show all images when not hovered (including last image)
					if (!hovered) {
						return (
							<motion.img
								key={i}
								src={src}
								alt="work"
								className="rounded-md object-cover"
								initial={{ scale: 1, opacity: 1, x: 0 }}
								animate={{ scale: 1, opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
								style={{ width: 80, height: 80 }}
							/>
						);
					}
					
					// When hovered, show only the last image enlarged
					if (hovered && isLastImage) {
						return (
							<motion.img
								key={i}
								src={src}
								alt="work"
								className="rounded-md object-cover absolute left-1/2"
								initial={{ scale: 0.6, opacity: 0, x: "-50%" }}
								animate={{ scale: 1, opacity: 1, x: "-50%" }}
								transition={{ duration: 0.3 }}
								style={{ width: 128, height: 128 }}
							/>
						);
					}
					
					// When hovered, hide other images with shrink animation
					if (hovered && !isLastImage) {
						return (
							<motion.img
								key={i}
								src={src}
								alt="work"
								className="rounded-md object-cover"
								initial={{ scale: 1, opacity: 1, x: 0 }}
								animate={{ scale: 0, opacity: 0, x: 20 }}
								transition={{ duration: 0.3 }}
								style={{ width: 80, height: 80 }}
							/>
						);
					}
					
					return null;
				})}
			</div>
		</div>
	);
}

export default function Works() {
	const [works] = useState(worksData);

	return (
		<section className="my-10 flex flex-col gap-4 items-center justify-center px-8">
			<h2 className="text-3xl font-bold mb-8">Work Experiences</h2>
			<div className="flex gap-8 flex-wrap mb-12">
				{works.map((work, idx) => (
					<WorkCard
						key={idx}
						images={work.images}
						title={work.title}
						description={(work as any).description}
					/>
				))}
			</div>
		</section>
	);
}