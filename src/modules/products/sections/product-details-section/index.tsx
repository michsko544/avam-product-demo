import type { ReactNode } from "react";

type Props = {
	details?: {
		title: string;
		content: ReactNode;
	}[];
};

export function ProductDetailsSection({ details = [] }: Props) {
	return (
		<section className="px-4 py-10">
			<div className="content-container mx-auto">
				<div className="grid lg:grid-cols-[2fr_5fr] gap-12 lg:px-25">
					{details.map((detail) => (
						<div className="grid lg:grid-cols-subgrid lg:col-span-2 gap-5" key={detail.title}>
							<h3 className="text-neutral-900 text-lg flex-shrink-0">{detail.title}</h3>
							<div className="rich-text text-neutral-700 text-base">{detail.content}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
