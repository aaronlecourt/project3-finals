import { useState } from "react";
import { useNavigate } from "react-router";
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Expert from './components/Expert';

const Create = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [equipments, setEquipments] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const workouts = {name, description, sets, reps, equipments}
        setIsPending(true);
        fetch('http://localhost:8000/workouts',{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(workouts)
        }).then(() => {console.log("Workout successfully added.");setIsPending(false);navigate('/')})
    }

    return(
        <div className="grid grid-cols-3">
      <div className="col-span-1 ml-5 px-3 ">
      <div className="flex flex-col">
        <h2 className="text-slate-100 font-poppins uppercase text-[20pt] font-bold text-center">Add a workout</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
                <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Name:</label>
                <input className="w-full rounded-xl bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Target Areas:</label>
                <input className="w-full rounded-xl bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Equipments:</label>
                <input className="w-full rounded-xl bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="text" required value={equipments} onChange={(e) => setEquipments(e.target.value)} />
            </div>

            <div className="flex justify-start gap-10">
            <div className="flex flex-col gap-2">
                <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Sets:</label>
                <input className="w-full rounded-xl bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="number" required value={sets} onChange={(e) => setSets(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Reps:</label>
                <input className="w-full rounded-xl bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs" type="number" required value={reps} onChange={(e) => setReps(e.target.value)} />
            </div>
            </div>
            
            <div className="flex justify-center">
                {!isPending && <button className="bg-slate-50 w-full text-slate-950 font-semibold p-2 hover:bg-slate-500 font-poppins uppercase rounded-xl text-sm">Add to Tracker</button>}
                {isPending && <button className="bg-slate-50 w-full text-slate-950 font-semibold p-2 font-poppins uppercase rounded-xl text-sm disabled">Just a moment!</button>}
            </div>
        </form>
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
    )
}

export default Create;
