import { Link } from "@/modules/common/components/link";

export default function Home() {
	const productSlug = "avam-nasafe";
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<Link
				href={`/products/${productSlug}`}
				className="py-3 px-6 bg-brand-primary rounded-sm font-bold text-white"
			>
				Go to product details
			</Link>
		</div>
	);
}
