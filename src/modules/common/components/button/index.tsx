import { Link } from "@/modules/common/components/link";
import { cn } from "@/utils/styles";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<C extends ElementType> = ComponentPropsWithoutRef<C> & {
	as?: C;
	className?: string;
	textClassName?: string;
	stretch?: boolean;
	children?: ReactNode;
	isLoading?: boolean;
	disabled?: boolean;
};

export function Button<C extends React.ElementType>({
	as,
	children,
	className,
	textClassName,
	stretch,
	isLoading = false,
	disabled = false,
	...restProps
}: Props<C>) {
	const ButtonComponent = as === "a" ? Link : (as ?? "button");

	return (
		<ButtonComponent
			className={cn(
				"flex items-center w-fit justify-center gap-2 bg-neutral-900 text-white px-6 py-4 text-base leading-[1] disabled:opacity-50",
				stretch && "w-full",
				className,
			)}
			disabled={disabled || isLoading}
			{...restProps}
		>
			{children}
		</ButtonComponent>
	);
}
