import Header from '@/pages/Buddhist/components/Header'
import React from 'react'
import WesternLayout from '../WesternLayout'
import Timeline from '../components/TimeLine'
import VisionAndMission from '../components/VisionAndMission'
import ValuseWisCare from '../components/ActivitiAndEvent/ValuseWisCare'

const Index = () => {
  return (
    <WesternLayout>
        <div className='mt-36 section-container'>
        <Header title={'Western International School History'} short_description={'Western International School first opened its doors on September 1, 2003. We started with 262 students from kindergarten to grade 11 with just one (1) campus. Twenty years later, we are now welcoming over 8,000 students across our 14 campuses located in Phnom Penh. Western International School and other schools.'}/>
        <Timeline/>
        <VisionAndMission/>
        <ValuseWisCare/>
        </div>
    </WesternLayout>
  )
}

export default Index
