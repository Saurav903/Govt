
import React from 'react'

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react'
  import { CheckIcon } from '@chakra-ui/icons'
  
  // Replace test data with your own
  const features = [
    {
        id: 1,
        title: 'Cleaning and Restoring India Water BodiesChallenge',
        text: 'Period: 04 - 18 Feb 2021 Pollution of our water bodies is one of the most critical waste challenges facing India. India is placed 120th amongst 122 countries in the water quality index (“World Water Day”, 2020). Approximately 80% of urban India’s sewage enters river bodies untreated or partly treated (“Around 80% of Sewage”, 2013). India’s Central Pollution Control Board identified more than 351 polluted river stretches on 323 rivers across the country (“River Stretches for Restoration”, 2018). The challenge invited solutions companies and entrepreneurs from India and around the world to apply existing technology solutions addressing urban drains, water bodies, lakes, ponds, and reservoirs across rural and urban areas. After a multistage assessment process, the Waste to Wealth Mission PMU identified AlphaMERS Limited as the winner of the challenge and provided certificate.'
        
      },
      {
        id:2,
        title:"Biomedical Waste Treatment Innovation Challenge",
        text:"Period: 15 June -15 July 2020 The W2W mission invited technology applications from startups, corporates, and entrepreneurs from research institutions to address the challenge of safe collection, disposal/ treatment of large volumes of bio-medical waste being generated during the ongoing COVID-19 pandemic. The solutions were sought in areas such as standalone waste disposal units which convert the waste to energy with further possibility to install these standalone units in housing complexes, markets, etc. Innovations & solutions which can be deployed immediately, with the prototype to be collection-cum-disposable unit in one, were sought. The Biomedical Waste Treatment Innovation Challenge Panel assessment had followed a multi-staged process through an Expert Committee formed for this project under the guidance of the Office of PSA. We had received an overwhelming response of 460 applicants out of which 8 finalists were selected. The Waste to Wealth Mission is currently working with one of the finalists, GD Environmental Pvt. Ltd., for demonstration and piloting support. A 150 kg/h gasifier has been deployed at Decentralized waste management technology park, Jafrabad for gasification of municipal solid waste (including COVID-19 waste) and is being exploredfor possible conversion to energy"
      }
  ]

const Innovation = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'4xl'}>INNOVATION CHALLENGES</Heading>
        
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Innovation