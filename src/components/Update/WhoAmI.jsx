import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  HStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiCodesandbox,
  SiDocker,
} from "react-icons/si";

const WhoAmI = () => {
  const column =useBreakpointValue({ sm:1, base: 1, md: 2, lg: 2, xl: 2 });
  return (
    // <Box bg="black" color="white" p={10} textAlign="center" sx={{ fontFamily: 'Courier New, Courier, monospace' }}>
    <Box  color="white"  p={{ base: 6, md: 8, lg: 10 }} textAlign="center" sx={{ fontFamily: 'Courier New, Courier, monospace' }}>
      <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textTransform="uppercase" mb={5}>
        Who Am I
      </Text>
      <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={5}>
        I am a motivated and versatile individual, always eager to take on{" "}
        <Text as="span" color="green.300">
          new challenges
        </Text>
        . With a passion for learning, I am dedicated to delivering{" "}
        <Text as="span" color="green.300">
          high-quality results
        </Text>
        . With a positive attitude and a growth mindset, I am ready to make a
        meaningful contribution and achieve great things.
      </Text>
      <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={10}>
        I have been recognized as one of the{" "}
        <Text as="span" color="green.300">
          Top 100 Coders
        </Text>
        , and I take pride in the positive feedback I've received from both
        clients and colleagues. Looking forward, I believe that a great
        developer not only fixes codes but also contributes to solving real
        world problems.
      </Text>

      <Flex justify="center" mb={10}>
        <Box mx={5} textAlign="center">
          <Text  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} color="green.300">
            01+
          </Text>
          <Text fontSize={{ base: "xs", md: "sm", lg: "md" }} textTransform="uppercase">
            Years of <br /> Experience
          </Text>
        </Box>
        <Box mx={5} textAlign="center">
          <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}  color="green.300">
            20+
          </Text>
          <Text fontSize={{ base: "xs", md: "sm", lg: "md" }} textTransform="uppercase">
            Completed <br /> Works
          </Text>
        </Box>
      </Flex>

      <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" mt={4}>
        Showcasing Skillset
      </Text>

      <Box mt={2}>
        <Grid  templateColumns={`repeat(${column}, 1fr)`}  gap={6}>
          <GridItem>
            <Text fontSize="xl" color="green.300">
              Front End
            </Text>
            <VStack>
              <HStack>
                <VStack>
                  <SiHtml5 size="40px" />
                  <Text mt={2}>HTML</Text>
                </VStack>
                <VStack>
                  <SiJavascript size="40px" />
                  <Text mt={2}>JS</Text>
                </VStack>
                <VStack>
                  <SiReact size="40px" />
                  <Text mt={2}>REACT</Text>
                </VStack>
                <VStack>
                  <SiCss3 size="40px" />
                  <Text mt={2}>CSS</Text>
                </VStack>
                <VStack>
                  <SiNextdotjs size="40px" />
                  <Text mt={2}>NextJS</Text>
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem>
            <Text fontSize="xl" color="green.300">
              Back End
            </Text>
            <VStack>
              <HStack>
                <VStack>
                  <SiMysql size="40px" />
                  <Text mt={2}>MYSQL</Text>
                </VStack>
                <VStack>
                  <SiNodedotjs size="40px" />
                  <Text mt={2}>Node JS</Text>
                </VStack>
                <VStack>
                  <SiExpress size="40px" />
                  <Text mt={2}>ExpressJS</Text>
                </VStack>
                <VStack>
                  <SiMongodb size="40px" />
                  <Text mt={2}>MongoDB</Text>
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={6} mt={6}>
          <GridItem>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} color="green.300">
              Others
            </Text>
            <VStack spacing={4}>
              <HStack justify="center" spacing={4}>
                <VStack>
                  <SiGit size="40px" />
                  <Text mt={2}>GIT</Text>
                </VStack>
                <VStack>
                  <SiFigma size="40px" />
                  <Text mt={2}>FIGMA</Text>
                </VStack>
                <VStack>
                  <SiVisualstudiocode size="40px" />
                  <Text mt={2}>VSCODE</Text>
                </VStack>
                <VStack>
                  <SiPostman size="40px" />
                  <Text mt={2}>POSTMAN</Text>
                </VStack>
              </HStack>
              <HStack justify="center" spacing={4}>
              <VStack>
                  <SiNetlify size="40px" />
                  <Text mt={2}>NETLIFY</Text>
                </VStack>
                <VStack>
                  <SiCodesandbox size="40px" />
                  <Text mt={2}>Code SandBox</Text>
                </VStack>
                <VStack>
                  <SiDocker size="40px" />
                  <Text mt={2}>Docker</Text>
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      <Flex justify="center" className="cont" mt={10} mb={10}>
        <Grid templateColumns={`repeat(${column}, 1fr)`} gap={6} w="full">
          <GridItem>
            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold" color={'#f2f2f1'} textTransform="uppercase" mb={5}>
              Experience
            </Text>
            <VStack align={{sm:"center" ,base : 'center', md:'start' ,xl :'start'}} spacing={4}>
              <Box width={'85%'}>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="bold" display={'flex'}>
                  Back End Developer <Text as="span" color="#74ce00" ml={2}>[GTech μLearn]</Text>
                </Text>
                <Text display={'flex'} color={'#51554e'}>December 2023 - March 2024</Text>
                <Text color={'#888988'} style={{marginTop:'.75rem'}} display={'flex'}>
                  Working as a Back End Developer helping MuLearn in their backend needs and database management throughout the internship period.
                </Text>
              </Box>
              <Box width={'85%'}>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="bold" display={'flex'}>
                  Back End Developer <Text as="span" color="#74ce00" ml={2}>[GTech μLearn]</Text>
                </Text>
                <Text display={'flex'} color={'#51554e'}>December 2023 - March 2024</Text>
                <Text color={'#888988'} style={{marginTop:'.75rem'}} display={'flex'}>
                  Working as a Back End Developer helping MuLearn in their backend needs and database management throughout the internship period.
                </Text>
              </Box>
     
            </VStack>
          </GridItem>
          <GridItem>
            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold" textTransform="uppercase" mb={5}>
              Education
            </Text>
            <VStack align={{sm:"center" ,base : 'center', md:'start' ,xl :'start'}} spacing={4}>
              <Box  width={'85%'}>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}  fontWeight="bold" display={'flex'}>
                  Christ College of Engineering <Text as="span" color="#74ce00" ml={2}>[BTech.]</Text>
                </Text>
                <Text  display={'flex'} color={'#51554e'}>August 2020 - August 2024</Text>
                <Text  display={'flex'} color={'#888988'} style={{marginTop:'.75rem'}}>
                  Bachelor's degree in Computer Science and Engineering at Christ College of Engineering, Irinjalakuda. CGPA - 8.42 (Till S5)
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}  fontWeight="bold" display={'flex'}>
                  Airport Senior Secondary School <Text as="span" color="#74ce00" ml={2}>[CS]</Text>
                </Text>
                <Text  display={'flex'} color={'#51554e'}>April 2017 - March 2019</Text>
                <Text  display={'flex'} color={'#888988'} style={{marginTop:'.75rem'}}>
                  Completed my class 12 high school education at Airport Senior Secondary School, Calicut Airport, Computer Science.
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default WhoAmI;
