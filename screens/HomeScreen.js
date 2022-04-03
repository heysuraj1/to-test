import { ScrollView} from 'react-native'
import React from 'react'
import TopNav from '../components/Home/TopNav';
import Services from '../components/Home/Services';
import MidImage from '../components/Home/MidImage';
import AMCPlans from '../components/Home/AMCPlans';


const HomeScreen = () => {
  return (
    <ScrollView >
      <TopNav/>     
      <Services/>      
      <MidImage/>
      <AMCPlans/>
    </ScrollView>
  )
}

export default HomeScreen