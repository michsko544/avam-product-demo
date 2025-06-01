import { ProductCard } from "@/modules/products/components/product-card";
import type { Media, Product } from "@/types/products";

type Props = {
	products?: { product: Product; featuredImage: Media | null }[];
};

export function RelatedProductsSection({ products = [] }: Props) {
	return (
		<section className="px-4 py-12">
			<div className="content-container mx-auto">
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl text-neutral-900">Related products</h2>
					{products.length > 0 ? (
						<div className="flex flex-col gap-6 w-full lg:gap-8">
							{products.slice(0, 4).map(({ product, featuredImage }) => (
								<div key={product.id}>
									<ProductCard product={product} featuredImage={featuredImage} />
								</div>
							))}
						</div>
					) : (
						<p className="text-neutral-700">No related products available.</p>
					)}
				</div>
			</div>
		</section>
	);
}
