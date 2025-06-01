import { productDetailsMock, productOptionsMock } from "@/app/mocks/products";
import {
	getMediaById,
	getProductByHandle,
	getProducts,
	getProductsByCategoryId,
} from "@/lib/avam-wordpress/products";
import { TabSwitcher } from "@/modules/common/components/tab-switcher";
import { ProductSkuCategory } from "@/modules/products/components/product-sku-category";
import { ProductDetailsSection } from "@/modules/products/sections/product-details-section";
import { ProductMainSection } from "@/modules/products/sections/product-main-section";
import { ProductOptionsSection } from "@/modules/products/sections/product-options-section";
import { RelatedProductsSection } from "@/modules/products/sections/related-products-section";
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
	const relatedProducts = await getProductsByCategoryId(product.product_cat[0] ? product.product_cat[0] : 0)
		.then((data) => data.filter((relatedProduct) => relatedProduct.id !== product.id))
		.catch(() => []);

	const relatedProductsWithImages = await Promise.all(
		relatedProducts.map(async (relatedProduct) => {
			const image = await getMediaById(relatedProduct.featured_media).catch(() => null);
			return {
				product: relatedProduct,
				featuredImage: image,
			};
		}),
	);

	return (
		<div>
			<ProductMainSection product={product} featuredImage={featuredImage} />
			<TabSwitcher
				tabs={[
					{
						label: "Description",
						value: "description",
						content: <ProductDetailsSection details={productDetailsMock} />,
					},
					{
						label: "Additional information",
						value: "additional_info",
						content: <ProductOptionsSection options={productOptionsMock} />,
					},
				]}
			/>
			<ProductSkuCategory sku={"CTM1199"} category={"Molecular"} />
			<RelatedProductsSection products={relatedProductsWithImages} />
		</div>
	);
}
