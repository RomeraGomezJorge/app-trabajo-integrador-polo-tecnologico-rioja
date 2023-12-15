import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LocationsDetails} from "../pages/home/LocationsDetails";
import {LocationList} from "../pages/location/LocationList";

export const AppRouter = () => {
    
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LocationsDetails/>} />
                <Route path="/location" element={<LocationList/>} />
            </Routes>
        </BrowserRouter>
    );
};