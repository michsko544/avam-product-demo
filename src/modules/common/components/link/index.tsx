"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";

type Props = ComponentProps<typeof NextLink> & {
	children: ReactNode;
	href: string;
};

export function Link({ children, href, ...props }: Props) {
	const router = useRouter();

	const handleHover: MouseEventHandler<HTMLAnchorElement> = () => {
		router.prefetch(href);
	};

	return (
		<NextLink {...props} href={href} onMouseEnter={handleHover}>
			{children}
		</NextLink>
	);
}
