import { Container } from '@mui/material';
import type { ComponentProps, ReactNode } from 'react';

import { HeroHeader, HeroHeaderProps } from '~/components/client';

export interface HeroLayoutProps extends Pick<HeroHeaderProps, 'text' | 'picture' | 'position' | 'height'> {
	/** Children components */
	children: ReactNode;
	/** Container id */
	id?: string;
	/** Props to pass to the Hero */
	headerProps?: Partial<HeroHeaderProps>;
	/** Props to pass to the Container */
	containerProps?: Partial<ComponentProps<typeof Container>>;
}

/**
 * Layout for pages with a hero header (home, about, etc.)
 */
export const HeroLayout = ({
	children,
	text,
	picture,
	id,
	position,
	height,
	headerProps,
	containerProps,
}: HeroLayoutProps) => {
	return (
		<>
			<HeroHeader text={text} picture={picture} position={position} height={height} {...headerProps} />
			<Container
				sx={{
					py: 4,
					minHeight: 'calc(100vh - 200px)', // footer is ~200px tall
				}}
				component="main"
				id={id}
				{...containerProps}
			>
				{children}
			</Container>
		</>
	);
};
