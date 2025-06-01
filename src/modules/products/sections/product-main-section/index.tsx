import { Breadcrumbs } from "@/modules/common/components/breadcrumbs";
import { ProductActions } from "@/modules/products/components/product-actions";
import Image from "next/image";

import PhHeartFill from "~icons/ph/heart-fill.svg";
import PhSealCheck from "~icons/ph/seal-check.svg";

import { productOptionsMock } from "@/app/mocks/products";
import { Link } from "@/modules/common/components/link";
import type { Media, Product } from "@/types/products";
import Fa6BrandsFacebookF from "~icons/fa6-brands/facebook-f.jsx";
import Fa6BrandsPinterest from "~icons/fa6-brands/pinterest.jsx";
import Fa6BrandsXTwitter from "~icons/fa6-brands/x-twitter.jsx";

type Props = {
	product: Product;
	featuredImage: Media | null;
};

export function ProductMainSection({ product, featuredImage }: Props) {
	return (
		<section className="lg:bg-neutral-200 lg:px-4 lg:pt-5 pb-6 lg:pb-15 border-b border-neutral-300 lg:border-b-0">
			<div className="content-container mx-auto">
				<div className="hidden lg:block lg:mb-4">
					<Breadcrumbs
						items={[
							{ label: "Collection & Transport", href: "/product-category/collection-transport" },
							{ label: "Molecular", href: "/product-category/collection-transport/molecular" },
							{ label: product.title.rendered },
						]}
					/>
				</div>
				<div className="w-full flex flex-col lg:flex-row lg:gap-4">
					<div className="w-full relative lg:pl-20 lg:pt-10">
						{featuredImage ? (
							<Image
								src={featuredImage.source_url}
								alt={featuredImage.alt_text ?? featuredImage.title.rendered ?? product.title.rendered}
								priority
								loading="eager"
								width={680}
								height={680}
								className="object-cover object-center"
								sizes="(max-width: 680px) 100vw, 680px"
							/>
						) : (
							<div className="w-full h-[680px] bg-neutral-300 flex items-center justify-center">
								<span className="text-neutral-900">No Image Available</span>
							</div>
						)}
					</div>
					<div className="w-full px-4 py-10 lg:pl-20">
						<div>
							<h1 className="text-neutral-900 text-2xl leading-[1.2] font-normal mb-3">
								{product.title.rendered}
							</h1>
							<div className="text-brand-primary text-xl leading-[1]">$201.00 - $245.00</div>
						</div>
						<div className="mt-6">
							<p className="text-base leading-[1.8] text-neutral-700">
								{product.excerpt.rendered.replaceAll(/<[^>]+>/g, "")}
							</p>
							<div className="flex items-center gap-2 mt-6 bg-brand-tonal rounded-lg px-6 py-2 w-fit">
								<PhSealCheck width={20} height={20} className="text-black" />
								<span className="text-xs leading-[2] text-black">
									Purchase this item and get <strong>20-24 Points</strong>
								</span>
							</div>
							<div className="mt-10">
								<ProductActions options={productOptionsMock} />
							</div>
							<div className="mt-8">
								<div className="flex items-center divide-x divide-neutral-500">
									<div className="pr-4">
										<PhHeartFill width={20} height={20} className="text-neutral-500 hover:text-neutral-600" />
									</div>
									<div className="flex items-center gap-4 pl-4">
										<Link
											href="https://www.facebook.com/AvamGroupX/"
											className="text-neutral-500 hover:text-neutral-600"
										>
											<Fa6BrandsFacebookF />
										</Link>
										<Link href="https://x.com/avamgroupx" className="text-neutral-500 hover:text-neutral-600">
											<Fa6BrandsXTwitter />
										</Link>
										<Link
											href="https://pinterest.com/company/avamgroup"
											className="text-neutral-500 hover:text-neutral-600"
										>
											<Fa6BrandsPinterest />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
