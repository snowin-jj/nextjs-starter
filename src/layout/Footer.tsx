import Link from 'next/link';
import { type FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<footer className='text-center'>
			<h1>
				Made by{' '}
				<Link href='https://devsnow.in' className='underline'>
					devsnow
				</Link>
			</h1>
		</footer>
	);
};
export default Footer;
