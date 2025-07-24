import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
	variants: {
		variant: {
			"body-sm-bold": "text-sm leading-5 font-semibold",
			"body-md": "text-base leading-6 font-normal",
			"body-md-bold": "text-base leading-6 font-semibold",
		},
	},
	defaultVariants: {
		variant: "body-md",
	},
});

interface Textprops extends VariantProps<typeof textVariants> {
	className?: string;
	children?: React.ReactNode;
	as?: keyof React.JSX.IntrinsicElements;
}

export function Text({
	as = "span",
	className,
	children,
	...props
}: Textprops) {
	return React.createElement(
		as,
		{
			className,
			...props,
		},
		children,
	);
}
