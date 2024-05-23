import Link from "next/link";

export default function Header(){
    return (
        <nav className="nav">
            <Link className="link" href={'/'}>Home</Link>
            <Link className="link" href={'blog'}>Blog</Link>
            <Link className="link" href={'contacts'}>Contacts</Link>
        </nav>
    )
}