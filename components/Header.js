import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <Link href="/">
                        <a>My Blog</a>
                    </Link>
                    <Link href="/about">
                        <a>About me</a>
                    </Link>
                </nav>
            </header>
        </>
    )
}