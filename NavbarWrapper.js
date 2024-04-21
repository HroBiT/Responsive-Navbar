// NavbarWrapper.js
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./navbar.client.js'), { ssr: false });

export default function NavbarWrapper() {
  return <Navbar />;
}