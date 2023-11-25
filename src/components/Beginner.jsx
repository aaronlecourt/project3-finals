import React , { useState } from 'react'

const Beginner = () => {
    const [beginner, setBeginner] = useState(
        [
            {
              "name": "Bodyweight Squats",
              "description": "Quads, Hamstrings, Glutes",
              "sets": 3,
              "reps": "12-15",
              "equipment": "None",
              "id": 1
            },
            {
              "name": "Push-Ups",
              "description": "Chest, Shoulders, Triceps",
              "sets": 3,
              "reps": "10-12",
              "equipment": "None",
              "id": 2
            },
            {
              "name": "Plank",
              "description": "Core",
              "sets": 3,
              "reps": "30s - 1min",
              "equipment": "None",
              "id": 3
            },
            {
              "name": "Dumbbell Rows",
              "description": "Back, Biceps",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Dumbbells",
              "id": 4
            },
            {
              "name": "Walking Lunges",
              "description": "Quads, Hamstrings, Glutes",
              "sets": 3,
              "reps": "12 each leg",
              "equipment": "None",
              "id": 5
            },
            {
              "name": "Dumbbell Shoulder Press",
              "description": "Shoulders, Triceps",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Dumbbells",
              "id": 6
            },
            {
              "name": "Calf Raises",
              "description": "Calves",
              "sets": 3,
              "reps": "15-20",
              "equipment": "None",
              "id": 7
            },
            {
              "name": "Seated Leg Press",
              "description": "Quads, Hamstrings, Glutes",
              "sets": 3,
              "reps": "12-15",
              "equipment": "Leg press machine",
              "id": 8
            },
            {
              "name": "Bent-Over Dumbbell Flyes",
              "description": "Chest, Shoulders",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Dumbbells",
              "id": 9
            },
            {
              "name": "Russian Twists",
              "description": "Obliques, Core",
              "sets": 3,
              "reps": "15 each side",
              "equipment": "None",
              "id": 10
            },
            {
              "name": "Lat Pulldowns",
              "description": "Back, Biceps",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Lat pulldown machine",
              "id": 11
            },
            {
              "name": "Hammer Curls",
              "description": "Biceps, Forearms",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Dumbbells",
              "id": 12
            },
            {
              "name": "Leg Extensions",
              "description": "Quads",
              "sets": 3,
              "reps": "12-15",
              "equipment": "Leg extension machine",
              "id": 13
            },
            {
              "name": "Tricep Dips",
              "description": "Triceps",
              "sets": 3,
              "reps": "10-12",
              "equipment": "Parallel bars",
              "id": 14
            },
            {
              "name": "Plank to Downward Dog",
              "description": "Core, Shoulders",
              "sets": 3,
              "reps": "10-12",
              "equipment": "None",
              "id": 15
            }
          ]          
    )
    return (
        <div class="flex overflow-x-auto whitespace-no-wrap p-3 scrollbar-thin scrollbar-thumb-gray-[rgba(0,0,0,0)] scrollbar-track-gray-[rgba(0,0,0,0)]">
            {beginner.map((exercise) => (
                <div class="flex-shrink-0 w-64 mx-2 bg-slate-200 p-3 rounded-lg">
                    <div className="inline-flex gap-3 items-center">
                        <div className="bg-orange-500 px-1 font-poppins text-sm text-slate-200 rounded-full">B</div>
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
}

export default Beginner