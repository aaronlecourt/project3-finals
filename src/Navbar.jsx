import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className="flex justify-between p-5 items-center">
            <Link to = "/">
                <h1 className="text-2xl text-slate-200 font-poppins font-bold">Gym Büddy</h1>
            </Link>
            <div className="flex gap-6 items-center uppercase text-sm font-poppins">
                <Link to = "/" className="text-slate-100 hover:text-rose-500">Home</Link>
                <Link to = "/workouts" className="text-slate-100 hover:text-rose-500">Workouts</Link>
                {/* <Link to = "/aboutme" className="text-slate-100 hover:text-rose-500">About Me</Link> */}
                <Link to = "/add" className="text-slate-950 font-semibold font-poppins bg-slate-50 p-2 px-3 rounded-md">Add a finished workout</Link>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}

export default Navbar;