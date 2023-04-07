import GithubIcon from '@/components/icons/GithubIcon';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='h-20 flex justify-between items-center'>
			<Link href='/'>
				<h1 className='head'>Next .</h1>
			</Link>
			<nav className='flex items-center gap-4'>
				<Link href='https://zipy.live/snowin/github' target='_blank'>
					<GithubIcon />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
