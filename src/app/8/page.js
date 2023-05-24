import Link from "next/link";

export default function Page() {
  return (
    <div className="flex text-4xl justify-center items-center h-screen">
      <div style={{ whiteSpace: "pre-wrap" }}>
        <p>
          <Link href="/8/practice">8급 복습</Link>
        </p>

        <p>
          <Link href="/8/dictionary">8급 사전</Link>
        </p>
      </div>
    </div>
  );
}
