import { productDetailsMock, productOptionsMock } from "@/app/mocks/products";
import { getMediaById, getProductByHandle, getProducts } from "@/lib/avam-wordpress/products";
import { TabSwitcher } from "@/modules/common/components/tab-switcher";
import { ProductSkuCategory } from "@/modules/products/components/product-sku-category";
import { ProductDetailsSection } from "@/modules/products/sections/product-details-section";
import { ProductMainSection } from "@/modules/products/sections/product-main-section";
import { ProductOptionsSection } from "@/modules/products/sections/product-options-section";
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
		</div>
	);
}
