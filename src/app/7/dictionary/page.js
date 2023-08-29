import { hanjaLevel7 } from "@/app/globalHanja";
import HanjaDictionary from "@/app/hanjaDictionary";

export default function Home() {
  return <HanjaDictionary hanjaLevel={hanjaLevel7} />;
}
