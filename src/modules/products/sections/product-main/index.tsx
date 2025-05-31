import { Breadcrumbs } from "@/modules/common/components/breadcrumbs";
import { ProductActions } from "@/modules/products/components/product-actions";
import Image from "next/image";

import PhHeartFill from "~icons/ph/heart-fill.svg";
import PhSealCheck from "~icons/ph/seal-check.svg";

import { Link } from "@/modules/common/components/link";
import Fa6BrandsFacebookF from "~icons/fa6-brands/facebook-f.jsx";
import Fa6BrandsPinterest from "~icons/fa6-brands/pinterest.jsx";
import Fa6BrandsXTwitter from "~icons/fa6-brands/x-twitter.jsx";

type Props = {
	product: unknown;
};

export function ProductMain({ product }: Props) {
	return (
		<section className="lg:bg-neutral-200 lg:px-4 lg:pt-5 pb-6 lg:pb-15 border-b border-neutral-300">
			<div className="content-container mx-auto">
				<div className="hidden lg:block lg:mb-4">
					<Breadcrumbs
						items={[
							{ label: "Collection & Transport", href: "/product-category/collection-transport" },
							{ label: "Molecular", href: "/product-category/collection-transport/molecular" },
							{ label: "Avam® NAsafe™ Nucleic Acid Molecular Transport Medium" },
						]}
					/>
				</div>
				<div className="w-full flex flex-col lg:flex-row lg:gap-4">
					<div className="w-full relative lg:pl-20 lg:pt-10">
						<Image
							src={
								"https://i0.wp.com/avam.com/wp-content/uploads/2025/02/NAsafe-with-Swabs-A1-scaled.jpg?fit=2560,2560&ssl=1"
							}
							alt="Product Image"
							priority
							loading="eager"
							width={680}
							height={680}
							className="object-cover object-center"
							sizes="(max-width: 680px) 100vw, 680px"
						/>
					</div>
					<div className="w-full px-4 py-10 lg:pl-20">
						<div>
							<h1 className="text-neutral-900 text-2xl leading-[1.2] font-normal mb-3">
								Avam® NAsafe™ Nucleic Acid Molecular Transport Medium
							</h1>
							<div className="text-brand-primary text-xl leading-[1]">$201.00 - $245.00</div>
						</div>
						<div className="mt-6">
							<p className="text-base leading-[1.8] text-neutral-700">
								Avam® NAsafe™ is an advanced nucleic acid transport medium designed to collect, inactivate,
								and preserve microbial and human nucleic acids with unparalleled efficiency. Ideal for
								molecular diagnostics, genetics research, and sequencing applications, NAsafe™ ensures sample
								integrity from collection to analysis.
							</p>
							<div className="flex items-center gap-2 mt-6 bg-brand-tonal rounded-lg px-6 py-2 w-fit">
								<PhSealCheck width={20} height={20} className="text-black" />
								<span className="text-xs leading-[2] text-black">
									Purchase this item and get <strong>20-24 Points</strong>
								</span>
							</div>
							<div className="mt-10">
								<ProductActions product={product} />
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
