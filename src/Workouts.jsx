import React from 'react'
import Beginner from './components/Beginner'
import Intermediate from './components/Intermediate'
import Expert from './components/Expert'

const Workouts = () => {
  return (
    <div className='px-5'>
    <div className="text-orange-500 mt-2 font-poppins font-semibold">
          Beginner Workouts →
        </div>
        <Beginner />
        <div className="text-teal-500 mt-2 font-poppins font-semibold">
          Intermediate Workouts →
        </div>
        <Intermediate />
        <div className="text-red-500 mt-2 font-poppins font-semibold">
          Expert Workouts →
        </div>
        <Expert />
    </div>
  )
}

export default Workouts