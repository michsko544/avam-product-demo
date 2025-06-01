type Props = {
	options?: {
		swabTypes: string[];
		productQuantities: string[];
	};
};

export function ProductOptionsSection({ options }: Props) {
	return (
		<section className="px-4 py-10">
			<div className="content-container mx-auto">
				<div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:px-50">
					<div className="grid grid-cols-subgrid lg:col-span-2 gap-5">
						<h3 className="text-neutral-900 text-base flex-shrink-0">Swab Type</h3>
						<div className="text-neutral-700 text-base">{options?.swabTypes.join(", ")}</div>
					</div>
					<div className="grid grid-cols-subgrid lg:col-span-2 gap-5">
						<h3 className="text-neutral-900 text-base flex-shrink-0">Product Quantity</h3>
						<div className="text-neutral-700 text-base">{options?.productQuantities.join(", ")}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
