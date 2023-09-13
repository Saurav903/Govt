import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    useColorModeValue,
    Text,
    Container,
    Box,
  } from '@chakra-ui/react'
  
  import { ChevronDownIcon } from '@chakra-ui/icons'

const Accord = ({sz,titl,contents,imge,imge2,vids1,vids2,vids3}) => {
  return (
    <Flex
      minH={sz}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">{titl}</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                {contents}
              </Text>
              {imge ? <img src={imge} /> : ""}
              {imge2 ? <img src={imge2}/> : ""}
              <Box>
              {vids1 ? <a href={vids1}>{vids1}</a> : ""}
              {vids2 ? <a href={vids2}>{vids2}</a> : ""}
              {vids3 ? <a href={vids3}>{vids3}</a> : ""}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}

export default Accord