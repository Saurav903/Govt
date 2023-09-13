import { Stat, StatLabel, StatNumber ,useColorModeValue} from "@chakra-ui/react"



 function StatsCard(props) {
    const { title, stat } = props
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        transition="transform 0.5s"
        _hover={{transform:"scale(1.1)"}}>
        <StatLabel fontWeight={'medium'} fontSize={'2xl'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'1xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    )
  }

  export default StatsCard;