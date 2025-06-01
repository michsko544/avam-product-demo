"use client";

import { Button } from "@/modules/common/components/button";
import { addToCart } from "@/modules/products/actions";
import { useActionState, useState } from "react";

import PhMinus from "~icons/ph/minus.jsx";
import PhPlus from "~icons/ph/plus.jsx";

type Props = {
	options?: {
		swabTypes: string[];
		productQuantities: string[];
	};
};

export function ProductActions({ options }: Props) {
	const [swabType, setSwabType] = useState<string | null>(null);
	const [productQuantity, setProductQuantity] = useState<string | null>(null);
	const [quantity, setQuantity] = useState<number>(1);

	const [, formAction, pending] = useActionState(addToCart, null);

	const isValid = swabType && productQuantity && quantity > 0;

	return (
		<form action={formAction} className="border-r border-l border-neutral-300">
			<div className="flex justify-between items-center gap-4 border-t border-neutral-300 px-4 py-3">
				<label htmlFor="swab-type" className="text-base text-neutral-900">
					Swab Type
				</label>
				<select
					className="border-none outline-none text-right pr-2 text-base text-neutral-900"
					id="swab-type"
					name="swab_type"
					value={swabType ?? ""}
					onChange={(e) => setSwabType(e.target.value)}
				>
					<option value="" disabled>
						Choose an option
					</option>
					{options?.swabTypes?.map((type) => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</select>
			</div>
			<div className="flex justify-between items-center gap-4 border-t border-neutral-300 px-4 py-3">
				<label htmlFor="product-quantity" className="text-base text-neutral-900">
					Product Quantity
				</label>
				<select
					className="border-none outline-none text-right pr-2 text-base text-neutral-900"
					id="product-quantity"
					name="product_quantity"
					value={productQuantity ?? ""}
					onChange={(e) => setProductQuantity(e.target.value)}
				>
					<option value="" disabled>
						Choose an option
					</option>
					{options?.productQuantities?.map((quantity) => (
						<option key={quantity} value={quantity}>
							{quantity}
						</option>
					))}
				</select>
			</div>
			<div className="flex justify-between items-center gap-4 border-t border-neutral-300 px-4 py-3">
				<label htmlFor="quantity" className="text-base text-neutral-900">
					Quantity
				</label>
				<div className="flex items-center gap-2 w-fit">
					<button
						className="border-none text-neutral-900"
						type="button"
						onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
					>
						<PhMinus width={20} height={20} />
					</button>
					<input
						type="number"
						className="border-none outline-none text-center max-w-6 text-base text-neutral-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						id="quantity"
						name="quantity"
						value={quantity ?? ""}
						min={1}
						onChange={(e) => setQuantity(e.target.valueAsNumber)}
					/>
					<button
						className="border-none text-neutral-900"
						type="button"
						onClick={() => setQuantity((prev) => prev + 1)}
					>
						<PhPlus width={20} height={20} />
					</button>
				</div>
			</div>
			<div>
				<Button stretch type="submit" disabled={!isValid} isLoading={pending}>
					Add to Cart
				</Button>
			</div>
		</form>
	);
}
