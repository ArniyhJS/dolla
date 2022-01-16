import { useState } from "react";

export const useCertification = () => {
  const [certImg, setCertImg] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSetCertImg = (e) => {
    const img = e.target.getAttribute("src");
    console.log(img);
    setCertImg(img);

    console.log(img);
  };
  console.log(toggle);

  const handleSetToggle = () => setToggle((p) => !p);

  return {
    toggle,
    certImg,
    handleSetToggle,
    handleSetCertImg,
  };
};
