import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <button className="text-4xl">
        <p>
          <Link href="/8">8급</Link>
        </p>
        <p>
          <Link href="/7ii">7급II</Link>
        </p>
        <p>
          <Link href="/7">7급</Link>
        </p>
      </button>
    </main>
  );
}
