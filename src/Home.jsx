import React from 'react'
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Expert from './components/Expert';
import useFetch from "./useFetch";
import WorkoutList from './WorkoutList';


const Home = () => {
    const {data:workouts, isPending, error} = useFetch('http://localhost:8000/workouts');
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 ml-5 px-3 ">
        <div className="text-slate-50 mt-2 font-poppins font-semibold">
          Workout Tracker →
        </div>
        <div className="overflow-y-auto h-[550px] scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-transparent pr-3">
          {error && <div className="font-poppins">{error}</div>}
          {workouts === 0 && (
            <div className="font-poppins text-sm text-slate-500/50">
              No Workouts
            </div>
          )}
          {isPending && (
            <div className="font-poppins text-sm text-slate-500/50">
              Loading Workouts...
            </div>
          )}
          {workouts && <WorkoutList workouts={workouts} />}
        </div>
      </div>
      <div className="col-span-2 px-5">
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
    </div>
  );
}

export default Home