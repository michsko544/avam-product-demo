import React from "react";

type Props = {
	sku: string;
	category: string;
};

export function ProductSkuCategory({ sku, category }: Props) {
	return (
		<div className="py-5 border-y border-neutral-300">
			<div className="px-4 flex flex-col gap-2 lg:flex-row lg:justify-center lg:items-center lg:gap-8">
				<p className="text-sm text-neutral-700">
					<span className="text-neutral-900">SKU:</span> {sku}
				</p>
				<p className="text-sm text-neutral-700">
					<span className="text-neutral-900">Category:</span> {category}
				</p>
			</div>
		</div>
	);
}
