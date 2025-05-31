import { getMediaById, getProductByHandle, getProducts } from "@/lib/avam-wordpress/products";
import { ProductMain } from "@/modules/products/sections/product-main";
import type { SearchParams } from "@/types/search-params";
import { notFound } from "next/navigation";

type Props = SearchParams<{
	handle: string;
}>;

export async function generateStaticParams() {
	const products = await getProducts();
	return products
		.filter((product) => product.status === "publish")
		.map((product) => ({
			handle: product.slug,
		}));
}

export default async function ProductPage({ params }: Props) {
	const { handle } = await params;
	const products = await getProductByHandle(handle).catch(() => null);

	const product = products && products.length > 0 ? products[0] : null;

	if (!product) {
		notFound();
	}

	const featuredImage = await getMediaById(product.featured_media).catch(() => null);

	return (
		<div>
			<ProductMain product={product} featuredImage={featuredImage} />
		</div>
	);
}
