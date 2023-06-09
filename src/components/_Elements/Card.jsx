import { Box, Center, Heading, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const Card = ({ title, description, icon, route }) => {
  return (
    <LinkBox
      maxW={{ base: 'full', md: '275px' }}
      w='full'
      borderWidth='1px'
      borderColor='fg-footer'
      borderRadius='lg'
      overflow='hidden'
      px={4}
      pb={4}
    >
      <Stack align='start' justify='space-around' h='210' flexWrap='wrap' spacing={2}>
        <Center h={16} bg='transparent'>
          {icon}
        </Center>
        <Box mt={2}>
          <Heading size='md' letterSpacing='tighter'>
            {title}
          </Heading>
          <Text mt={1} fontSize='sm'>
            {description}
          </Text>
        </Box>
        <Box>
          <LinkOverlay
            as={RouteLink}
            to={route}
            fontSize='0.7em'
            fontWeight='bold'
            textTransform='uppercase'
            letterSpacing='widest'
            color='fg-accent'
          >
            Try Now
          </LinkOverlay>
        </Box>
      </Stack>
    </LinkBox>
  );
};

export default Card;
