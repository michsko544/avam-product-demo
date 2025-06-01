"use client";

import { cn } from "@/utils/styles";
import { type ReactNode, useState } from "react";

type Props = {
	tabs?: {
		label: string;
		value: string;
		content: ReactNode;
	}[];
};

export function TabSwitcher({ tabs = [] }: Props) {
	const [currentTab, setCurrentTab] = useState<string | null>(tabs[0]?.value ?? null);

	const handleTabClick = (value: string | null) => {
		setCurrentTab(value);
	};

	const currentContent = tabs.find((tab) => tab.value === currentTab)?.content ?? null;

	return (
		<div className="py-4">
			<div className="px-4">
				<div className="content-container mx-auto">
					{tabs.length > 0 && (
						<ul className="flex flex-col gap-2 md:flex-row md:gap-6 md:justify-center">
							{tabs.map((tab) => (
								<li
									key={tab.value}
									className={cn(
										"text-neutral-400 w-fit",
										currentTab === tab.value && "text-neutral-900 border-b border-neutral-400",
									)}
								>
									<button
										onClick={() => handleTabClick(tab.value)}
										className="cursor-pointer text-base leading-[2]"
									>
										{tab.label}
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
			{currentContent}
		</div>
	);
}
