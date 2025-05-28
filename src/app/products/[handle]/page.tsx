import { ProductMain } from "@/modules/products/sections/product-main";
import type { SearchParams } from "@/types/search-params";

type Props = SearchParams<{
	handle: string;
}>;

// TODO: Generate Paths based on https://avam.com/wp-json/wp/v2/product?per_page=100

export default async function ProductPage({ params: { handle } }: Props) {
	// TODO: Fetch product data based on https://avam.com/wp-json/wp/v2/product?slug=avam-nasafe
	return (
		<div>
			<ProductMain product={handle} />
		</div>
	);
}
