import { useEffect, useState } from "react";
// import { animateScroll as scroll } from "react-scroll";

export const useHeader = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeNav = () => {
    const scrollVerticalHeight = window.scrollY;

    if (scrollVerticalHeight >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleToggle = () => {
    setToggle((p) => !p);
  };

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    const scroll = window.addEventListener("scroll", changeNav);

    // return () => window.removeEventListener(scroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggle]);

  return { toggle, scrollNav, handleToggle };
};
