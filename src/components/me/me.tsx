import { Image } from "@nextui-org/react";
import ME from "../../assets/ME.jpg";

export default function Me() {
  return (
    <Image
      isZoomed
      isBlurred
      alt="NextUI Album Cover"
      className="m-10 rounded-none"
      src={ME.src}
      width={300}
    />
  );
}
