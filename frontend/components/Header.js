import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick fits</Link>
      </div>
      <div>
        <p>Search bar</p>
      </div>
      <Nav />
    </header>
  );
}
