import { hanjaLevel7II } from "@/app/globalHanja";
import HanjaTestOptions from "@/app/hanjaTestOptions";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <HanjaTestOptions hanjaLevel={hanjaLevel7II} />
    </main>
  );
}
