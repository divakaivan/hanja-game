import { hanjaLevel7II } from "@/app/globalHanja";
import HanjaDictionary from "@/app/hanjaDictionary";

export default function Home() {
  return <HanjaDictionary hanjaLevel={hanjaLevel7II} />;
}
