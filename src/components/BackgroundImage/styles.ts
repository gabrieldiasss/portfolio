import { styled } from "../../../styles";
import Image from "next/image";

export const ImageStyled = styled(Image, {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  zIndex: "-1",
});
