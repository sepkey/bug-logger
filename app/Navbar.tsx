'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoBug } from 'react-icons/go';

const links = [
  { name: 'Dashboard', href: '/' },
  { name: 'Bugs', href: '/bugs' },
];

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6  px-5 border-b h-14 items-center mb-5">
      <Link href="/">
        <GoBug className="text-xl  hover:rotate-12  hover:text-indigo-500 transition-all" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              currentPath === link.href ? 'text-indigo-600' : ''
            }  text-zinc-500 hover:text-indigo-600 transition-colors`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
