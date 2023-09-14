import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../style/team.module.css"
import img1 from "../imges/Screenshot from 2023-09-14 13-37-38.png"
import img2 from "../imges/Screenshot from 2023-09-14 13-38-21.png"
import img3 from "../imges/Screenshot from 2023-09-14 13-38-29.png"
import img4 from "../imges/Screenshot from 2023-09-14 13-38-37.png"
import img5 from "../imges/Screenshot from 2023-09-14 13-38-51.png"
import img6 from "../imges/Screenshot from 2023-09-14 13-38-57.png"
import img7 from "../imges/Screenshot from 2023-09-14 13-39-04.png"
import img8 from "../imges/Screenshot from 2023-09-14 13-39-11.png"

const Team = () => {
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gap="10px" justifyContent={"center"} alignItems={"center"} width={"90%"} margin={"auto"} 
    borderRadius={"10px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" className={style.teams}>
        
        <Box>
        <Image src={img1}/>
            <Text>Prof. Ajay Kumar Sood Principal Scientific Adviser to the Government of India</Text>       
        </Box>
        
        <Box>
        <Image src={img2}/>
            <Text>Dr. Parvinder Maini
Scientific Secretary</Text>
        </Box>
        
        <Box>
        <Image src={img3}/>
            <Text>Dr. Monoranjan Mohanty
Adviser/Scientist G</Text>
        </Box>
        
        <Box>
        <Image src={img4}/>
            <Text>Ms. Malyaj Varmani
Vice President, Invest India</Text>
        </Box>
        
        <Box>
        <Image src={img5}/>
            <Text>Saurabh Dutta
Sr. Manager</Text>
        </Box>
        
        <Box>
        <Image src={img6}/>
            <Text>Aniket Ghanshyam
Sr. Manager</Text>
        </Box>
        
        <Box>
        <Image src={img7}/>
            <Text>Jayita Ghosh
Manager</Text>
        </Box>
        
        <Box>
        <Image src={img8}/>
            <Text>Surbhi Awasthi
Associate</Text>
        </Box>
    </Box>
  )
}

export default Team