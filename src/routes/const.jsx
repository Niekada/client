import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Questions from "../pages/Quesions/Questions";
import Answers from "../pages/Answers/Answers";
import AddQuestion from "../pages/Quesions/AddQuestions";
import AddAnswer from "../pages/Answers/AddAnswer";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/Login";
export const REGISTER_PATH = "/Register";
export const QUESTIONS_PATH = "/Questions";
export const ADD_QUESTION_PATH = "/AddQuestion"
export const ANSWERS_PATH = "/Answers";
export const ADD_ANSWER_PATH = "/AddAnswer";

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
            path: ADD_QUESTION_PATH,  
            Component: AddQuestion,
        },
        {
            path: ANSWERS_PATH,  
            Component: Answers,
        },
        {
            path: ADD_ANSWER_PATH,  
            Component: AddAnswer,
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