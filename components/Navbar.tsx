import Link from 'next/link';
import styles from "../styles/navbar.module.css";

interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const links: NavLink[] = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <h1>&copy;Jonathan Hazan</h1>
        </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
