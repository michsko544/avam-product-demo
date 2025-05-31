import React from "react";

import { Link } from "@/modules/common/components/link";

type Props = { items?: { label: string; href?: string }[] };

export function Breadcrumbs({ items = [] }: Props) {
	return (
		<nav className="py-2">
			<ul className="flex items-center gap-2 text-sm text-neutral-900">
				<li className="">
					<Link href="/" className="hover:text-brand-primary">
						Home
					</Link>
				</li>

				{items.map(({ label, href }) => (
					<React.Fragment key={label}>
						<div>{"/"}</div>
						<li className="">
							{href ? (
								<Link href={href} className="hover:text-brand-primary">
									{label}
								</Link>
							) : (
								label
							)}
						</li>
					</React.Fragment>
				))}
			</ul>
		</nav>
	);
}
