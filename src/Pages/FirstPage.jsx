import React from "react";
import style from "../style/first.module.css";
import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import StatsCard from "../utils/utilis";
import Crousel from "../Components/Crousel";
import Accord from "../Components/Accord";
import Innovation from "../Components/Innovation";
import DropDown from "../Components/DropDown";

const FirstPage = () => {
  return (
    <div className={style.top}>
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        textAlign={"center"}
        className={style.underlineanimation}
      >
        The Waste to{" "}
        <Text as={"span"} color={"orange.400"}>
          Wealth Mission
        </Text>
      </Heading>

      <div>
        <Text
          color={"gray.500"}
          maxW={"5xl"}
          textAlign={"center"}
          margin={"auto"}
          padding={"50px"}
          className={style.text}
        >
          The Waste to Wealth Mission, spearheaded by the Office of the
          Principal Scientific Advisor to the Government of India (O/o PSA),
          aims at strengthening the waste management system in India by
          identifying and validating innovative technology solutions and models
          to achieve a zero landfill and zero waste nation. In line with its
          vision, the Mission has taken several initiatives in different areas
          of waste management, including technology demonstrations in multiple
          waste management domains, community engagement and development of an
          online portal which will act as a reference for all stakeholders
          including urban local bodies, government departments, technology
          companies, investors and citizens looking for comprehensive
          information on waste management technologies, policies and investment
          opportunities.
        </Text>
      </div>

      <div className={style.vid1}>
        <iframe
          width="782"
          height="440"
          src="https://www.youtube.com/embed/-dFtR0sGqmM"
          title="description"
        ></iframe>
      </div>

      <div className={style.belowvid1}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Vision"}
            stat={
              "To identify and validate innovative technologies that can help create a cleaner and greener environment in a sustainable way. To boost and augment the Swachh Bharat Mission and Smart Cities Project by leveraging science, technology, and innovation. o create ready reckoners for waste management so best practices can be shared.To drive community initiatives in the area fo waste management to drive behavioral change"
            }
          />
          <StatsCard
            title={"Focus"}
            stat={
              "The focus of our mission is to provide scientific and technological inputs towardsconservation, sustainable use, and restoration of our land, air, and water resources. The technology solutions identified will support Urban Local Bodies (ULBs) to create circular economic models that are financially viable for waste management & streamline waste handling in the country"
            }
          />
        </SimpleGrid>
      </div>

      <div>
        <div style={{ padding: "70px" }}>
          <Heading textAlign={"center"} className={style.underlineanimation}>
            HIGHLIGHTS OF INITIATIVES UNDER WASTE TO WEALTH{" "}
            <Text as={"span"} color={"orange.400"}>
              MISSION
            </Text>
          </Heading>
        </div>
        <Crousel />
      </div>

      {/* div technologies */}

      <div style={{ padding: "70px" }}>
        <Heading textAlign={"center"} className={style.underlineanimation}>
          TECHNOLOGY DEPLOYMENTS
        </Heading>

        <div className={style.tech}>
          <div className={style.techleft}>
            <Heading fontSize={"20px"} height={"50px"}>
              Cleaning Barapullah Drain
            </Heading>
            <Box>
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/4TIl-ysyhe0"
              ></iframe>
            </Box>

            <Box marginTop={"20px"}>
              <Accord
                sz={"10vh"}
                titl={"Problem Statement"}
                contents={
                  "Cleaning of open drains in congested areas has always been a challenge in India because there is no or limited access for traditional equipment like Joseph Cyril Bamford (JCB) excavator, Poclain, etc. and human settlements on both sides of the drain with narrow passages make it impossible to dispose of the collected waste. The Barapullah drain in South Delhi is one such drain that is blocked at various locations with sewage, trash, and debris, resulting in foul odor, vector-borne diseases, unhygienic conditions, and flooding in the monsoons."
                }
              />
              <Accord sz={"10vh"} titl={"Technology Solution"} contents={"To address this critical problem, the Waste to Wealth Mission, one of the ten scientific missions of the Office of the Principal Scientific Adviser to the Government of India, collaborated with South Delhi Municipal Corporation (now Municipal Corporation of Delhi) to jointly pilot an indigenous, customized excavator - Drain Master DM-80, designed and developed by M/s Cleantec Infra Pvt. Ltd., Mumbai. The DM-80 unit was selected to address the critical gap area of technologies for cleaning congested urban drains clogged with mixed waste including construction and demolition debris which are very hard to dislodge and remove."} imge={"https://i.imgur.com/T8bD7p8.png"} imge2={"https://i.imgur.com/TdrfovZ.png"}/>
              <Accord sz={"10vh"} titl={"Impact"} contents={"The DM-80 unit was in operation for a duration of one year from 3rd January 2022 to 2nd January 2023. During this period, Cleantec Infra operated the unit to clean and desilt approximately a 3 km stretch of the Barapullah drain starting from Sundial Park to Jangpura, removing approximately 3000 tons of waste in the process. The Municipal Corporation of Delhi provided supporting equipment for the disposal of the waste removed from the drain"} imge={"https://i.imgur.com/KBqwL4X.png"}/>
            </Box>
          </div>

          <div className={style.techright}>
            <Heading fontSize={"20px"} height={"50px"}>
              Decentralized Waste Management Technology Park
            </Heading>
            <Box>
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/qXO5rjRb9yA"
              ></iframe>
            </Box>
            <Box marginTop={"20px"}>
              <Accord sz={"10vh"} titl={"Problem statement"} contents={"Unscientific disposal of mixed waste in open dumpsites generates harmful greenhouse emissions and contaminate soil and groundwater causing health and environment hazards to the city’s population. Presently, the 469 colonies across 64 wards in East Delhi generate on an average about 2200 tons per day of fresh municipal solid waste which is disposed unscientifically in five open dumpsites. Diverting this fresh waste from entering the landfills will be key to achieve the objective of zero landfill."}/>
              <Accord sz={"10vh"} titl={"Technology Solution"} contents={"Considering the challenges faced by urban and rural Local bodies, the Waste to Wealth Mission of the Office of the Principal Scientific Adviser to the Government of India, in collaboration with the erstwhile East Delhi Municipal Corporation (now MCD) set up a Decentralised Waste Management Technology Park in New Jaffrabad, East Delhi for onsite processing of fresh Municipal solid waste. Following 4 Technologies are deployed at the site:          1) XAPER by E3 Waste Solutions An indigenous semi-automated technology that segregates 10 TPD fresh mixed municipal solid waste into compostable, recyclable, combustible, and inert fractions.The open dumpsite or dhalao is replaced by Xaper for onsite segregation andprocessing.          2)Plasma Pyrolysis by IIT Delhi The unit thermally disintegrates carbonaceous material in an oxygen-starved environment into environment friendly components. The segregated combustible fractions will be used in pyrolysis unit. 3)Gasifier by GD Environmental Pvt. Ltd. A 150 kg/h plant for gasification of municipal solid waste (including COVID- 19 waste) and possible conversion to energy. Unit also has real time online emission monitoring system. "} vids1={"https://drive.google.com/file/d/1KXDEPpZ1zFdyfFCSk3JidDEW-5-f08S5/view?usp=sharing"} vids2={"https://drive.google.com/file/d/1E375YdMySMBzpC0yx23ljgzISoNDJC38/view?usp=sharing"} vids3={"https://drive.google.com/file/d/1h6J6MEe8NEaJZ4ps5V-fa9GXatXOe8jC/view?usp=sharing"}/>
              <Accord sz={"10vh"} titl={"Impact"} contents={"At the Technology Park, 10 TPD Municipal waste is onsite segregated and treated, resulting in volume reduction and conversion into 1 TPD compostable fractions, 2 TPD combustibles fractions, 1.5 TPD recyclables. The facility also has a waste compaction unit for reducing the volume for handling & transportation. The combustible waste will then be processed on-site, leaving only 5-10% of inerts reaching landfills. In addition to incoming MSW, floating waste from the adjacent 52-cusec drain is also collected and processed on-site.This will also ensure SWM compliance of Urban Local Bodies under Solid Waste Management Rules 2016 and for reducing the load on landfill sites, without the procurement of new land for setup and disposal. Decentralized processing of waste is a step towards “Zero Landfill” with the added advantage of reduction in the transportation of the waste."} imge={"https://i.imgur.com/SP1N1zY.png"}/>
            </Box>
          </div>
        </div>
      </div>
      <div>
        <Innovation/>
      </div>
      <div>
        <Heading textAlign={"center"} className={style.underlineanimation} marginTop={"70px"} marginBottom={"50px"}>TECHNOLOGY REPOSITORY</Heading>
        <Text w="70%" margin={"auto"} color={'gray.600'}>
          Disclaimer:
          The technologies listed in this repository broadly fall under two categories: Technologies
          which been evaluated by Waste to Wealth Mission and Jal Jeevan Mission. These
          technologies have been scientifically evaluated by Expert Committees comprising of
          renowned subject experts from academia and industry. These recommendations are based
          on scientific merits and only suggestive in nature for deployment. All technical and
          commercial information provided about the technologies are only for information and
          general understanding of readers. Users should not consider the technologies listed here as
          any form of endorsement or recommendation by Waste to Wealth Mission, Office of PSA,
          Invest India, Jal Jeevan Mission, Department of Drinking Water and Sanitation (DDWS),
          and Ministry of Jal Shakti, Government of India. There could be many other similar
          technologies and users are advised to select appropriate technologies as per their local needs
          and procure them according to their procurement policies after carrying out necessary due
          diligence.
          The repository also lists technologies identified by other bodies such as Central Pollution
          Control Board, United Nations Environment Programme, Tamil Nadu Urban Sanitation
          Support Programme etc. The information provided for these technologies have been
          sourced as is from the respective databases and Waste to Wealth Mission, Office of PSA
          and Invest India cannot be held liable for any incorrect information provided in these
          databases.
        </Text>
      </div>

      <div>
        <Heading textAlign={"center"} className={style.underlineanimation} marginTop={"70px"} marginBottom={"50px"}>POLICIES</Heading>

        <DropDown/>
      </div>

      <div className={style.videosall}>
        <Card width={"80%"} margin={"auto"}>
          <CardBody display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} gap="20px">
          <iframe width="100%" height="200vh" src="https://www.youtube.com/embed/azoyJ97I52E"></iframe>
          <iframe width="100%" height="200vh" src="https://www.youtube.com/embed/yH_oH5OUwWk"></iframe>
          <iframe width="100%" height="200vh" src="https://www.youtube.com/embed/vgI8KpNSjeo"></iframe>
          <iframe width="100%" height="200vh" src="https://www.youtube.com/embed/pEX2_kVs52o"></iframe>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FirstPage;
