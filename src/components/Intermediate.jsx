import React, { useState } from 'react';

const Intermediate = () => {
  const [intermediate, setIntermediate] = useState([
    {
      "name": "Barbell Squats",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Barbell, squat rack",
      "id": 1
    },
    {
      "name": "Pull-Ups",
      "description": "Back, Biceps",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Pull-up bar",
      "id": 2
    },
    {
      "name": "Deadlifts",
      "description": "Back, Glutes, Hamstrings",
      "sets": 4,
      "reps": "8-10",
      "equipment": "Barbell",
      "id": 3
    },
    {
      "name": "Incline Dumbbell Press",
      "description": "Chest, Shoulders",
      "sets": 4,
      "reps": "10-12",
      "equipment": "Dumbbells, incline bench",
      "id": 4
    },
    {
      "name": "Barbell Bent-Over Rows",
      "description": "Back, Biceps",
      "sets": 4,
      "reps": "10-12",
      "equipment": "Barbell",
      "id": 5
    },
    {
      "name": "Lunges with Dumbbells",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 4,
      "reps": "10 each leg",
      "equipment": "Dumbbells",
      "id": 6
    },
    {
      "name": "Hanging Leg Raises",
      "description": "Core",
      "sets": 3,
      "reps": "12-15",
      "equipment": "Pull-up bar",
      "id": 7
    },
    {
      "name": "Face Pulls",
      "description": "Shoulders, Upper back",
      "sets": 3,
      "reps": "12-15",
      "equipment": "Cable machine",
      "id": 8
    },
    {
      "name": "Dumbbell Lunges",
      "description": "Quads, Hamstrings, Glutes",
      "sets": 4,
      "reps": "10 each leg",
      "equipment": "Dumbbells",
      "id": 9
    },
    {
      "name": "Dumbbell Bench Press",
      "description": "Chest, Triceps",
      "sets": 4,
      "reps": "10-12",
      "equipment": "Dumbbells, flat bench",
      "id": 10
    },
    {
      "name": "Side Plank with Rotation",
      "description": "Obliques, Core",
      "sets": 3,
      "reps": "12 each side",
      "equipment": "None",
      "id": 11
    },
    {
      "name": "Romanian Deadlifts",
      "description": "Hamstrings, Glutes, Lower back",
      "sets": 4,
      "reps": "10-12",
      "equipment": "Barbell",
      "id": 12
    },
    {
      "name": "Dumbbell Shoulder Lateral Raises",
      "description": "Shoulders",
      "sets": 3,
      "reps": "12-15",
      "equipment": "Dumbbells",
      "id": 13
    },
    {
      "name": "Tricep Kickbacks",
      "description": "Triceps",
      "sets": 3,
      "reps": "12-15",
      "equipment": "Dumbbells",
      "id": 14
    },
    {
      "name": "Box Jumps",
      "description": "Quads, Calves",
      "sets": 3,
      "reps": "10-12",
      "equipment": "Box",
      "id": 15
    }
  ]);

  return (
    <div class="flex overflow-x-auto whitespace-no-wrap p-3 scrollbar-thin scrollbar-thumb-gray-[rgba(0,0,0,0)] scrollbar-track-gray-[rgba(0,0,0,0)]">
        {intermediate.map((exercise) => (
            <div class="flex-shrink-0 w-64 mx-2 bg-slate-200 p-3 rounded-lg">
                <div className="inline-flex gap-3 items-center">
                    <div className="bg-teal-500 px-1 font-poppins text-sm text-slate-200 rounded-full">I</div>
                    <div>
                        <h2 className='text-slate-800 font-poppins font-bold text-sm'>{exercise.name}</h2>
                        <h2 className='text-slate-800 font-poppins font-medium text-xs'>{exercise.description}</h2>
                    </div>
                </div>
               <div>
                <h2 className='text-slate-800 font-poppins font-semibold text-xs ml-7 mt-3'>Equipment: {exercise.equipment}</h2>
                <div className='flex items-center justify-evenly mt-4 pt-2 border-t border-slate-900/20'>
                    <h2 className='text-slate-800 font-poppins font-semibold text-xs'>Sets: {exercise.sets}</h2>
                    <h2 className='text-slate-800 font-poppins font-semibold text-xs'>Reps: {exercise.reps}</h2>
                </div>
               </div>
            </div>
        ))}
    </div>
  );
};

export default Intermediate;
