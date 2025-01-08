import * as React from 'react';

interface IconProps extends React.HTMLAttributes<SVGElement> {
	size?: number;
}

export const Hamburger = ({ size = 28, ...restProps }: IconProps) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			version="1.1"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
			<g>
				<path strokeWidth="2" d="M4 8h16" />
			</g>
			<g>
				<path strokeWidth="2" d="M4 16h16" />
			</g>
		</svg>
	);
};
