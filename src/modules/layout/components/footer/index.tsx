import { Link } from "@/modules/common/components/link";
import Logo from "@/modules/common/components/logo";
import type { NavLink } from "@/types/navigation";

import Fa6BrandsFacebookF from "~icons/fa6-brands/facebook-f.jsx";
import Fa6BrandsLinkedin from "~icons/fa6-brands/linkedin.jsx";
import Fa6BrandsXTwitter from "~icons/fa6-brands/x-twitter.jsx";

type Props = {
	links?: NavLink[];
};

export async function Footer({ links = [] }: Props) {
	return (
		<footer className="w-full bg-neutral-900">
			<div className="px-4 py-8">
				<div className="content-container mx-auto">
					<div className="flex gap-8 flex-col lg:flex-row lg:justify-between">
						<div className="flex flex-col gap-4">
							<Link href="/">
								<Logo height={40} variant="white" />
							</Link>
							<ul className="lg:flex lg:flex-wrap lg:gap-5">
								{links.map(({ linkText, linkUrl }) => (
									<li key={linkText} className="py-1 border-b border-neutral-800 lg:border-b-0">
										<Link href={linkUrl} className="text-neutral-400 hover:text-neutral-100 text-sm">
											{linkText}
										</Link>
									</li>
								))}
							</ul>
							<small className="w-fit block text-neutral-400 text-sm">
								&copy; {new Date().getFullYear()} Avam Sciences. All Rights Reserved.
							</small>
						</div>
						<div>
							<ul className="flex gap-4 items-center">
								<li>
									<Link
										href="https://linkedin.com/company/avamgroup"
										className="text-neutral-200 hover:text-neutral-100"
									>
										<Fa6BrandsLinkedin />
									</Link>
								</li>
								<li>
									<Link href="https://x.com/avamgroupx" className="text-neutral-200 hover:text-neutral-100">
										<Fa6BrandsXTwitter />
									</Link>
								</li>
								<li>
									<Link
										href="https://www.facebook.com/AvamGroupX/"
										className="text-neutral-200 hover:text-neutral-100"
									>
										<Fa6BrandsFacebookF />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
