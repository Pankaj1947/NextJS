import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="menu-bar">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/users'>Users</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blogs</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar