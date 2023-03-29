import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Questions from "../pages/Quesions/Questions";
import Answers from "../pages/Answers/Answers";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/Login";
export const REGISTER_PATH = "/Register";
export const QUESTIONS_PATH = "/Questions";
export const ANSWERS_PATH = "/Answers"

export const mainLayoutRoutes = {
    routes: [
        {
            path: HOME_PATH,  
            Component: Home,
        },
        {
            path: QUESTIONS_PATH,  
            Component: Questions,
        },
        {
            path: ANSWERS_PATH,  
            Component: Answers,
        },
    ],
};

export const authLayoutRoutes = {
    routes: [
        {
            path: REGISTER_PATH,  
            Component: Register,
        },
        {
            path: LOGIN_PATH,  
            Component: Login,
        },
    ],
};