"use client"
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Magnetic from '../Magnetic';

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

  // Set navigation flag when user clicks on links
  const handleNavigation = () => {
    sessionStorage.setItem('isNavigating', 'true');
  };

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Magnetic>
            <Link href={'/'} onClick={handleNavigation}>©Jonathan Hazan</Link>
            </Magnetic>
        </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Magnetic>
            <Link href={link.href} onClick={handleNavigation}>
              {link.label}
            </Link>
            </Magnetic>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
