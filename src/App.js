import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import WorkoutDetails from './WorkoutDetails';
import Create from './Create';
import Workouts from './Workouts';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      
      {/* Mix-blend-mode overlay */}
      <div className="mix-blend-multiply bg-slate-950/95 absolute inset-0 h-screen"></div>

      {/* Content */}
      <div className="relative w-100 z-10 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              {/* <Route path="/aboutme" element={<AboutMe />} /> */}
              <Route path="/add" element={<Create />} />
              <Route path="/workouts" element={<Workouts />} />

              <Route path="/workouts/:id" element={<WorkoutDetails />} />
              {/* Add other routes as needed */}
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
