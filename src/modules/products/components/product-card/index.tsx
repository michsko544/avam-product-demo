import { Button } from "@/modules/common/components/button";
import { Link } from "@/modules/common/components/link";
import type { Media, Product } from "@/types/products";
import Image from "next/image";

import PhHeart from "~icons/ph/heart.jsx";

type Props = {
	product: Product;
	featuredImage: Media | null;
};

export function ProductCard({ product, featuredImage }: Props) {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center w-full">
			<Link href={`/products/${product.slug}`} className="relative flex-shrink-0">
				{featuredImage ? (
					<Image
						src={featuredImage.source_url}
						alt={featuredImage.alt_text ?? featuredImage.title.rendered ?? product.title.rendered}
						loading="lazy"
						width={340}
						height={340}
						className="object-cover object-center"
						sizes="(max-width: 340px) 100vw, 340px"
					/>
				) : (
					<div className="w-full h-[340px] bg-neutral-300 flex items-center justify-center">
						<span className="text-neutral-900">No Image Available</span>
					</div>
				)}
			</Link>
			<div className="flex flex-col pt-4 lg:p-6 w-full">
				<div className="flex justify-between items-start gap-3">
					<Link href={`/products/${product.slug}`}>
						<h3 className="text-lg text-neutral-900">{product.title.rendered}</h3>
					</Link>
					<button className="flex-shrink-0 p-1 cursor-pointer">
						<PhHeart />
					</button>
				</div>
				<div className="text-neutral-900 text-sm leading-[1] mt-1">$201.00 - $245.00</div>
				<p className="text-base leading-[1.8] text-neutral-700 mt-4">
					{product.excerpt.rendered.replaceAll(/<[^>]+>/g, "")}
				</p>
				<div className="flex items-center gap-5 mt-6">
					<Button className="py-2 px-4 text-sm">Select options</Button>
					<Link
						href={`/products/${product.slug}`}
						className="text-neutral-900 text-sm border-b border-neutral-300"
					>
						Show more
					</Link>
				</div>
			</div>
		</div>
	);
}
