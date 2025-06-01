import type { Product } from "@/types/products";

type Props = {
	products?: Product[];
};

export function RelatedProductsSection({ products = [] }: Props) {
	return (
		<section className="px-4 py-12">
			<div className="content-container mx-auto">
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl text-neutral-900">Related products</h2>
					{products.length > 0 ? (
						<div className="flex gap-4">
							{products.map((product) => (
								<div key={product.id} className="flex-shrink-0 w-48">
									<h3 className="text-lg font-semibold">{product.title.rendered}</h3>
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
