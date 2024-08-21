import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isSlowmo, setIsSlowmo] = useState(false);

  const toggleSlowmo = () => {
    setIsSlowmo(!isSlowmo);
  };
  const menuOff = () => {
    setIsSlowmo(isSlowmo);
  };

  const data = [
    {
      id: "1",
      item: "Home",
      url: "/",
    },
    {
      id: "2",
      item: "About",
      url: "/intro",
    },
    {
      id: "3",
      item: "project",
      url: "/project",
    },
    {
      id: "4",
      item: "Blog",
      url: "/blog",
    },
    {
      id: "5",
      item: "Contact",
      url: "/contact",
    },
  ];

  return (
    <Box pos="relative" className="MobileNav">
      {/* Your Content */}
      {/* Mobile Navbar */}
      <HStack m={3}>
        <NavLink className="logo navbar-brand" to="/">
          <span className="logoName">H</span>
          <span className="logoName">a</span>
          <span className="logoName">r</span>
          <span className="logoName">s</span>
          <span className="logoName">h</span>
          <span className="logoName">i</span>
          <span className="logoName">t </span>
          <span className="logoName"> </span>
          <span className="logoName">D</span>
          <span className="logoName">i</span>
          <span className="logoName">x</span>
          <span className="logoName">i</span>
          <span className="logoName">t</span>
        </NavLink>
        <Button
          id="burger"
          pos="fixed"
          top="15px"
          right="15px"
          zIndex="1000"
          bg="none"
          border="0"
          onClick={onToggle}
          _focus={{ outline: "none" }}
        >
          <Box
            className="burger"
            pos="relative"
            w="28px"
            h="4px"
            bg="#ffdb2e"
            transform="skew(5deg)"
            transition="all .275s"
            _before={{
              content: `''`,
              display: "block",
              height: "100%",
              bg: "#ffdb2e",
              transition: "all .275s",
              transform: isOpen
                ? "translateY(0px) skew(-10deg) rotate(75deg)"
                : "translateY(-16px) skew(-10deg)",
            }}
            _after={{
              content: `''`,
              display: "block",
              height: "100%",
              bg: "#ffdb2e",
              transition: "all .275s",
              transform: isOpen
                ? "translateY(-12px) translateX(10px) skew(-20deg)"
                : "translateY(-12px) translateX(-2px) skew(-20deg)",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <Text
            className="burger-text"
            mt=".5em"
            fontSize=".675rem"
            letterSpacing=".05em"
            textTransform="uppercase"
            fontWeight="500"
            textAlign="center"
            color="#ffdb2e"
          >
            {/* Menu */}
          </Text>
        </Button>
      </HStack>

      {/* Main Navigation */}
      <Box
        className="main-nav"
        pos="fixed"
        top="0"
        right="0"
        bottom="0"
        left="0"
        textAlign="center"
        bg="white"
        opacity={isOpen ? 1 : 0}
        zIndex={isOpen ? 100 : -1}
        visibility={isOpen ? "visible" : "hidden"}
        transition="all .375s"
        _before={{
          content: `''`,
          pos: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: "-15px",
          bg: "#f6e05e8f",
          transformOrigin: "0 0",
          transform: isOpen
            ? "skew(-14deg) translateX(0)"
            : "skew(-14deg) translateX(-120%)",
          transition: "all .275s .1s",
        }}
      >
        <Flex
          as="ul"
          flexDirection="column"
          h="93%"
          alignItems="flex-end"
          justifyContent="center"
          transform="translateX(-18%) skew(-16deg)"
        >
          {data.map((item, index) => (
            <Box as="li" key={index} mb=".5rem" transform="skew(16deg)">
             
              <Link
                to={item.url}
                onClick={onToggle}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "#ffdb2e",
                  fontSize: "1.4em",
                  fontWeight: "bold",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-10px)",
                  transition: `all 275ms ${175 + index * 50}ms`,
                }}
              >
                {item.item}
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
