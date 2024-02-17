import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/menu">
        <button>Order Now</button>
      </Link>
    </main>
  );
}
