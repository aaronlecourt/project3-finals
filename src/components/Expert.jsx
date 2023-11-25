import React, { useState } from 'react';

const Expert = () => {
  const [expert, setExpert] = useState([
    {
      "name": "Front Squats",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 5,
      "reps": "6-8",
      "equipment": "Barbell, squat rack",
      "id": 1
    },
    {
      "name": "Muscle-Ups",
      "description": "Chest, Back, Biceps",
      "sets": 5,
      "reps": "6-8",
      "equipment": "Pull-up bar, rings",
      "id": 2
    },
    {
      "name": "Sumo Deadlifts",
      "description": "Back, Glutes, Hamstrings",
      "sets": 5,
      "reps": "6-8",
      "equipment": "Barbell",
      "id": 3
    },
    {
      "name": "Weighted Dips",
      "description": "Chest, Triceps",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Parallel bars, weight belt",
      "id": 4
    },
    {
      "name": "Barbell Rows",
      "description": "Back, Biceps",
      "sets": 5,
      "reps": "8-10",
      "equipment": "Barbell",
      "id": 5
    },
    {
      "name": "Pistol Squats",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 4,
      "reps": "6 each leg",
      "equipment": "None (or with a counterweight for assistance)",
      "id": 6
    },
    {
      "name": "Dragon Flags",
      "description": "Core",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Flat bench",
      "id": 7
    },
    {
      "name": "Single-Arm Dumbbell Press",
      "description": "Shoulders, Triceps",
      "sets": 4,
      "reps": "8-10 each arm",
      "equipment": "Dumbbell, bench",
      "id": 8
    },
    {
      "name": "Barbell Lunges",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 5,
      "reps": "8 each leg",
      "equipment": "Barbell",
      "id": 9
    },
    {
      "name": "Handstand Push-Ups",
      "description": "Shoulders, Triceps",
      "sets": 4,
      "reps": "6-8",
      "equipment": "Wall (for balance)",
      "id": 10
    },
    {
      "name": "Ab Rollouts",
      "description": "Core",
      "sets": 4,
      "reps": "10-12",
      "equipment": "Ab wheel",
      "id": 11
    },
    {
      "name": "Snatch",
      "description": "Full body",
      "sets": 5,
      "reps": "6-8",
      "equipment": "Barbell",
      "id": 12
    },
    {
      "name": "Weighted Pull-Ups",
      "description": "Back, Biceps",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Weight belt",
      "id": 13
    },
    {
      "name": "Reverse Grip Bent-Over Rows",
      "description": "Back, Biceps",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Barbell",
      "id": 14
    },
    {
      "name": "Barbell Calf Raises",
      "description": "Calves",
      "sets": 4,
      "reps": "12-15",
      "equipment": "Barbell, calf block",
      "id": 15
    }
  ]);

  return (
    <div class="flex overflow-x-auto whitespace-no-wrap p-3 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
        {expert.map((exercise) => (
            <div class="flex-shrink-0 w-64 mx-2 bg-slate-50/10 p-3 rounded-lg">
            <div className="inline-flex gap-3 items-center">
                <div className="bg-red-500 px-1 font-poppins text-sm text-slate-950 rounded-full">E</div>
                <div>
                    <h2 className='text-slate-50 font-poppins font-bold text-sm'>{exercise.name}</h2>
                    <h2 className='text-slate-50 font-poppins font-medium text-xs'>{exercise.description}</h2>
                </div>
            </div>
           <div>
            <h2 className='text-slate-50 font-poppins font-semibold text-xs ml-7 mt-3'>Equipment: {exercise.equipment}</h2>
            <div className='flex items-center justify-evenly mt-4 pt-2 border-t border-slate-50/20'>
                <h2 className='text-slate-50 font-poppins font-semibold text-xs'>Sets: {exercise.sets}</h2>
                <h2 className='text-slate-50 font-poppins font-semibold text-xs'>Reps: {exercise.reps}</h2>
            </div>
           </div>
        </div>
        ))}
    </div>
  );
};

export default Expert;
