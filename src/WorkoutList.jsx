import {Link} from "react-router-dom";
const WorkoutList = ({workouts}) => {
    return(
        <>
            {workouts.map((s) => (
                <div className="mt-2" key={s.id}>
                    <Link to = {`/workouts/${s.id}`}>
                    <div class="flex-shrink-0 w-full bg-slate-50/10 p-3 rounded-lg">
            <div className="flex gap-3 items-center">
                <div className="bg-slate-50 px-1 font-poppins text-xs text-slate-950 rounded-full">✔</div>
                <div>
                    <h2 className='text-slate-50 font-poppins font-bold text-sm'>{s.name}</h2>
                    <h2 className='text-slate-50 font-poppins font-medium text-xs'>{s.description}</h2>
                </div>
            </div>
           <div>
            <h2 className='text-slate-50 font-poppins font-semibold text-xs ml-7 mt-3'>Equipment: {s.equipments}</h2>
            <div className='flex items-center justify-evenly mt-4 pt-2 border-t border-slate-50/20'>
                <h2 className='text-slate-50 font-poppins font-semibold text-xs'>Sets: {s.sets}</h2>
                <h2 className='text-slate-50 font-poppins font-semibold text-xs'>Reps: {s.reps}</h2>
            </div>
           </div>
        </div>
                    </Link> 
                </div>
            ))}      
        </>
    );
};

export default WorkoutList;