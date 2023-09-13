
import { Route, Routes } from 'react-router-dom'
import Cohort from '../Pages/Cohort'
import FirstPage from '../Pages/FirstPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/page2' element={<Cohort/>}/>
    </Routes>
  )
}

export default AllRoutes