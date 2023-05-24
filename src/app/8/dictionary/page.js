import { hanjaLevel8 } from "@/app/globalHanja";
import HanjaDictionary from "@/app/hanjaDictionary";

export default function Home() {
  return <HanjaDictionary hanjaLevel={hanjaLevel8} />;
}
