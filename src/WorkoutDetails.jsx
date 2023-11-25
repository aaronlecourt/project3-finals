import useFetch from "./useFetch";
import { useParams, useNavigate } from 'react-router-dom';

const WorkoutDetails = () => {
    const { id } = useParams();
    const { data: workouts, error, isPending } = useFetch('http://localhost:8000/workouts/' + id);

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/workouts/' + workouts.id, {
            method: "DELETE",
        }).then(() => {
            navigate('/')
        })
    }

    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[800px]">
        {isPending && (
          <div className="font-poppins text-[90pt] text-slate-500/10 text-center">
            {" "}
            Loading Workouts...{" "}
          </div>
        )}
        {error && <div className="font-poppins"> {error} </div>}
        {workouts && (
          <>
            <div class="flex-shrink-0 w-full bg-slate-50/10 p-3 rounded-lg">
              <div className="flex gap-3 items-center">
                <div className="bg-slate-50 px-1 font-poppins text-xs text-slate-950 rounded-full">
                  ✔
                </div>
                <div>
                  <h2 className="text-slate-50 font-poppins font-bold text-xl">
                    {workouts.name}
                  </h2>
                  <h2 className="text-slate-50 font-poppins font-medium text-xs">
                    Target Muscles: {workouts.description}
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-slate-50 font-poppins font-semibold text-xs ml-7 mt-3">
                  Equipment: {workouts.equipments}
                </h2>
                <div className="flex items-center justify-evenly mt-4 pt-2 border-t border-slate-50/20">
                  <h2 className="text-slate-50 font-poppins font-semibold text-xs">
                    Sets: {workouts.sets}
                  </h2>
                  <h2 className="text-slate-50 font-poppins font-semibold text-xs">
                    Reps: {workouts.reps}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <button
                onClick={handleClick}
                className="text-rose-500 px-3 py-2 font-poppins"
              >
                REMOVE THIS REVIEW
              </button>
            </div>
          </>
        )}
      </div>
      </div>
    );
}

export default WorkoutDetails;
