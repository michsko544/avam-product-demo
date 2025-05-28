"use client";

import { Link } from "@/modules/common/components/link";
import type { NavLink } from "@/types/navigation";
import { useState } from "react";
import PhListThin from "~icons/ph/list-thin.jsx";

type Props = {
	links?: NavLink[];
};

export function SideMenu({ links = [] }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex items-center h-full">
			<div className="relative flex w-fit h-full">
				<button className="relative flex items-center focus:outline-none p-2" onClick={() => setIsOpen(true)}>
					<PhListThin width={16} height={16} />
				</button>
			</div>
			{isOpen && (
				<div className="fixed inset-0 w-full h-full bg-white z-50">
					<div className="flex items-center justify-end p-4">
						<button
							className="text-gray-500 hover:text-gray-700 focus:outline-none"
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
					</div>
					<div className="p-4">
						<ul className="space-y-2">
							{links.map(({ linkText, linkUrl }) => (
								<li key={linkText}>
									<Link href={linkUrl} className="text-brand-primary">
										{linkText}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
