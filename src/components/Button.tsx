import type React from "react";
import { Icon } from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./Text";

export const buttonVariants = cva(
	"flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
	{
		variants: {
			variant: {
				primary: "bg-gray-200 hover:bg-pink-light",
			},
			size: {
				md: "h-14 py-4 px-5",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
			handling: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			disabled: false,
			handling: false,
		},
	},
);

export const buttonTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-gray-400",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export const buttonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "text-pink-base",
		},
		size: {
			md: "w-5 h-5",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon?: React.ComponentProps<typeof Icon>["svg"];
	handling?: boolean;
}

export function Button({
	variant,
	size,
	disabled,
	children,
	handling,
	className,
	icon: IconComponent,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, disabled, className })}
			{...props}
		>
			{IconComponent && (
				<Icon
					svg={IconComponent}
					animate={handling}
					className={buttonIconVariants({ variant, size })}
				/>
			)}
			<Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
				{children}
			</Text>
		</button>
	);
}
