import Image from "next/image";

type Props = {
	product: unknown;
};

export function ProductMain({ product }: Props) {
	return (
		<section className="lg:bg-neutral-200 lg:px-4 lg:py-5">
			<div className="content-container mx-auto">
				<div className="w-full flex flex-col lg:flex-row lg:gap-4">
					<div className="w-full relative">
						<Image
							src={
								"https://i0.wp.com/avam.com/wp-content/uploads/2025/02/NAsafe-with-Swabs-A1-scaled.jpg?fit=2560,2560&ssl=1"
							}
							alt="Product Image"
							priority
							loading="eager"
							width={680}
							height={680}
							className="object-cover object-center"
							sizes="(max-width: 680px) 100vw, 680px"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
