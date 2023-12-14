import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";
import { LocationsDetails } from "../pages/backoffice/home/LocationsDetails";
import { LocationCreateButton } from "../pages/backoffice/location/LocationCreateButton";
import { LocationList } from "../pages/backoffice/location/LocationList";

export const AppRouter = () => {
    
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/backoffice/home" element={<LocationsDetails/>} />
                <Route path="/backoffice/location" element={<LocationList/>} />
                <Route path="/backoffice/location/create" element={<LocationCreateButton/>} />
            </Routes>
        </BrowserRouter>
    );
};