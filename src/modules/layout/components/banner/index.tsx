import { Link } from "@/modules/common/components/link";

export function Banner() {
	return (
		<div className="bg-neutral-900 px-4 py-1.5">
			<div className="content-container mx-auto flex items-center justify-between">
				<div>
					<Link href="/yeti-giveaway-promotion-summer-2025" className="text-xs text-neutral-200">
						Earn Free Yeti® Gear for a Limited Time with Your Order - Learn More →
					</Link>
				</div>
				<div className="flex divide-x text-neutral-200 text-xs font-bold">
					<div className="pr-3">
						<a href="tel:18003309010">1-800-330-9010</a>
					</div>
					<div className="flex items-center gap-5 pl-3">
						<Link href="/quick-order">Quick Order</Link>
						<Link href="/order-status">Order Status</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
