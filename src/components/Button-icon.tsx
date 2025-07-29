import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./Icon";
import spinnerIcon from "../assets/icons/x.svg?react";

export const buttonIconVariants = cva(
	"inline-flex items-center justify-center cursor-pointer transition group",
	{
		variants: {
			variant: {
				none: "",
				primary: "bg-green-base hover:bg-green-dark",
				secondary: "bg-gray-200 hover:bg-pink-base",
				tertiary: "bg-transparent hover:bg-gray-200",
			},
			size: {
				sm: "w-6 h-6 p-1 rounded",
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
			size: "sm",
			disabled: false,
			handling: false,
		},
	},
);

export const buttonIconIconVariants = cva("transition", {
	variants: {
		variant: {
			none: "",
			primary: "text-white",
			secondary: "text-pink-base group-hover:text-white",
			tertiary: "text-gray-300 group-hover:text-gray-400",
		},
		size: {
			sm: "h-4 w-4",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
});

interface ButtonIconProps
	extends VariantProps<typeof buttonIconVariants>,
		Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
	loading?: boolean;
	handling?: boolean;
}

export function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	loading,
	handling,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({
				variant,
				size,
				disabled,
				className,
				handling,
			})}
			{...props}
		>
			<Icon
				svg={handling ? spinnerIcon : icon}
				animate={handling}
				className={buttonIconIconVariants({ variant, size })}
			/>
		</button>
	);
}
