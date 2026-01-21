import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scotiabank Arena Online Menu',
};

export default function Home() {
  return (
    <main style={{ padding: '1rem' }}>
      <Image
        src="/images/logo-scotiabankarena.png"
        alt="Scotiabank Arena Logo"
        width={300}
        height={100}
        priority
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <p>Scotiabank Arena Online Menu:</p>
      <ul>
        <li>
          <Link href="/draughtdeck">Molson Draught Deck</Link>
        </li>
        <li>
          <Link href="/specialty-food">Specialty Offerings</Link>
        </li>
      </ul>
    </main>
  );
}
