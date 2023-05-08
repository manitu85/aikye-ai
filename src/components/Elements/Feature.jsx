import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { RiUserStarFill } from 'react-icons/ri';
import { VscSymbolKeyword } from 'react-icons/vsc';

const headingGradient = 'linear(to-l, #fff, #eefa94)';

const Feature = ({ title, sub, desc, ...rest }) => {
  return (
    <Flex p={5} w={750} direction='column' justify='flexStart' gap={4} {...rest}>
      <Box>
        <Heading
          as='h1'
          fontSize='5xl'
          bgGradient={headingGradient}
          bgClip='text'
          fontFamily='"Open Sans"'
        >
          {title}
        </Heading>
        <Heading as='h2' fontSize='2xl' bgGradient={headingGradient} bgClip='text'>
          {sub}
        </Heading>
      </Box>
      <Text text='fg-accent' mt={4}>
        {desc}
      </Text>
      <Flex justify='flex-start' gap={16} mt={2}>
        <HStack spacing={2}>
          <Icon as={RiUserStarFill} boxSize={6} currentColor />
          <Text
            color='fg-muted'
            mt={4}
            fontSize='sm'
            fontWeight='bold'
            textTransform='uppercase'
            fontFamily='"Open Sans'
          >
            <span>
              {' '}
              active daily <CountUp
                prefix='~ '
                start={73}
                end={12345}
                duration={3}
                delay={0.1}
              />{' '}
              users{' '}
            </span>
          </Text>
        </HStack>
        <HStack spacing={2}>
          <Icon as={VscSymbolKeyword} boxSize={6} currentColor />
          <Text
            color='fg-muted'
            mt={4}
            fontSize='sm'
            fontWeight='bold'
            textTransform='uppercase'
            fontFamily='"Open Sans'
          >
            <span>
              {' '}
              extracted{' '}
              <CountUp prefix='~ ' start={3562} end={1235079120} duration={6} delay={0.1} />{' '}
              keywords{' '}
            </span>
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Feature;