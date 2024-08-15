import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import goldenHand from "./img/cursor-yellow.png";
import pointerHand from "./img/pointer-yellow.png"; // Ensure this path is correct

const Cursor = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease, background-image 0.1s ease;
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorImage, setCursorImage] = useState(goldenHand);

  useEffect(() => {
    const onMouseMove = (event) => {
      cursorRef.current.style.left = `${event.pageX}px`;
      cursorRef.current.style.top = `${event.pageY}px`;
    };

    const onMouseEnterNavItem = () => {
      setCursorImage(pointerHand);
    };

    const onMouseLeaveNavItem = () => {
      setCursorImage(goldenHand);
    };

    window.addEventListener("mousemove", onMouseMove);

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("mouseenter", onMouseEnterNavItem);
      item.addEventListener("mouseleave", onMouseLeaveNavItem);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      navItems.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnterNavItem);
        item.removeEventListener("mouseleave", onMouseLeaveNavItem);
      });
    };
  }, []);

  return <Cursor ref={cursorRef} image={cursorImage} />;
};

export default CustomCursor;
