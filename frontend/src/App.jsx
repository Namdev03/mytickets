import { Routes, Route, useLocation } from "react-router";
import { pagePath } from "./Routes/pagePath";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBooking";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer";
import TrailerCard from "./components/TrailerCard";
import Dashboard from "./pages/Admin/Dashboard";
function App() {
const isAdmineRoute = useLocation().pathname.startsWith('/admin');
  return (
    <>
    <Toaster/>
   { !isAdmineRoute && <NavBar/>}
      <Routes>
        <Route path={pagePath.HOME} element={<Home />} />
        <Route path={pagePath.MOVIES} element={<Movies />} />
        <Route path={pagePath.MOVIEDETAILS} element={<MovieDetails />} />
        <Route path="/movie/book/:id" element={<SeatLayout />} />
        <Route path={pagePath.MYBOOKING} element={<MyBooking />} />
        <Route path={pagePath.FAVORITE} element={<Favorite />} />
        <Route path="/movie/moviedetails" element={<MovieDetails/>}/> 
        <Route path="/movie/moviedetails/trailer" element={<TrailerCard/>}/> 
         </Routes>
       { !isAdmineRoute && <Footer/>}
       <Routes>
        <Route path="/admin" element={<Dashboard/>}/>
       </Routes>
  </>
  );
}

export default App;