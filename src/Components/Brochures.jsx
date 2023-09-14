import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import style from "../style/brochure.module.css";

const Brochures = () => {
  return (
   <>
    <Box className={style.lists}> 
        <ol>
            <li>Swacchta Saarthi Samaroh Impact Report</li>
            <li>Decentralized Waste Management Technology Park</li>
            <li>Cleaning Barapullah Drain</li>
            <li>Swacchta Saarthi Fellowship</li>
            <li>Swacchta Saarthi Fellowship Handbook</li>
        </ol>
    </Box>
   </>
  )
}

export default Brochures