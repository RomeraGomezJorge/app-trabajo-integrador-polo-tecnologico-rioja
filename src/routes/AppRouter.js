import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/backoffice/Layout";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";
import { LocationList } from "../pages/backoffice/location/LocationList";

export const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/backoffice/home" element={<Layout/>} />
                <Route path="/backoffice/location" element={<LocationList/>} />
            </Routes>
        </BrowserRouter>
    );
};