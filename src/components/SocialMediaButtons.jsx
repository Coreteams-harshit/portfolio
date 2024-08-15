// SocialMediaButtons.js
import React from 'react';
import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialMediaButtons = () => {
  return (
    <Flex direction="column" align="flex-start" color="white">
      <Box mb={5}>
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="2px" marginBottom={0} fontWeight="300">
          Find with me
        </Text>
        <Flex>
          <Link className='FindWithMe' href="#" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="outline"
              isRound
              m={1}
              size="lg"
              color={'#fff'}
              _hover={{
                color:'#ffdb2e',
                bg:'gray'
              }}
            />
          </Link>
          <Link className='FindWithMe' href="https://twitter.com/?lang=en" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="outline"
              isRound
              m={1}
              size="lg"
              color={'#fff'}
              _hover={{
                color:'#ffdb2e',
                bg:'gray'
              }}
            />
          </Link>
          <Link className='FindWithMe' href="http://linkedin.com/" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="outline"
              isRound
              m={1}
              size="lg"
              color={'#fff'}
              _hover={{
                color:'#ffdb2e',
                bg:'gray'
              }}
            />
          </Link>
        </Flex>
      </Box>
      {/* <Box>
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="2px" fontWeight="300">
          Best skill on
        </Text>
        <Flex>
          <Link href="#" isExternal>
            <Box as="img" src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-01.png" alt="invision" boxSize="60px" m={1} />
          </Link>
          <Link href="#" isExternal>
            <Box as="img" src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-02.png" alt="sketch" boxSize="60px" m={1} />
          </Link>
          <Link href="#" isExternal>
            <Box as="img" src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png" alt="figma" boxSize="60px" m={1} />
          </Link>
        </Flex>
      </Box> */}
    </Flex>
  );
};

export default SocialMediaButtons;
