import type React from "react";
import { cx } from "class-variance-authority";

interface mainProps extends React.ComponentProps<"main"> {}

export function MainContent({ children, className, ...props }: mainProps) {
	return (
		<main className={cx("mt-4 md:mt-8", className)} {...props}>
			{children}
		</main>
	);
}
