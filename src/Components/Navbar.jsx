import React from 'react'

import style from "../style/navbar.module.css";
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.main}>
        <div className={style.left}> 
            <img src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png" alt="india" />
        <Text className={style.text}>GOVT.</Text>
        </div>

        <div className={style.right}>
            <Link to={"/"}>Home</Link>
            <Link to={"/part2"}>Cohort</Link>
        </div>
    </div>
  )
}

export default Navbar