import Link from "next/link";

export default function Page() {
  return (
    <div className="flex text-4xl justify-center items-center h-screen">
      <div style={{ whiteSpace: "pre-wrap" }}>
        <p>
          <Link href="/7/practice">7급 복습</Link>
        </p>

        <p>
          <Link href="/7/dictionary">7급 사전</Link>
        </p>
      </div>
    </div>
  );
}
