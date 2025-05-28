import { Link } from "@/modules/common/components/link";
import Logo from "@/modules/common/components/logo";
import { Banner } from "@/modules/layout/components/banner";
import { SideMenu } from "@/modules/layout/components/side-menu";
import type { NavLink } from "@/types/navigation";
import { cn } from "@/utils/styles";

import IconShoppingCartSimple from "~icons/ph/shopping-cart-simple.jsx";

type Props = {
	links?: NavLink[];
};

export async function Nav({ links = [] }: Props) {
	return (
		<div className="sticky top-0 inset-x-0 z-50 group isolate">
			<div className="hidden w-full md:block">
				<Banner />
			</div>
			<div className="w-full">
				<header className="mx-4 py-2">
					<nav className="content-container mx-auto flex items-center w-full h-12 gap-10">
						<div className="flex items-center h-full flex-shrink-0">
							<Link href="/">
								<Logo />
							</Link>
						</div>

						<div className={cn("flex ml-auto w-full gap-2 items-center justify-between")}>
							<div className="flex items-center gap-10">
								<div className="hidden lg:flex items-center gap-8">
									{links.map(({ linkText, linkUrl }) => (
										<Link href={linkUrl} key={linkText}>
											{linkText}
										</Link>
									))}
								</div>
							</div>

							<div className="flex">
								<div className="flex-1 basis-0 h-full flex items-center justify-end">
									<Link href="/cart" className="p-2">
										<IconShoppingCartSimple width={16} height={16} />
									</Link>
								</div>

								<div className="lg:hidden flex-1 basis-0 h-full flex items-center justify-end">
									<div className="h-full">
										<SideMenu links={links} />
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
}
