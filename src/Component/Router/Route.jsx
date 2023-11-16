import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardItem from "../CardItem/CardItem";


const myCreatedRouter = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>, 
                loader : () => fetch("/donation.json"),
            },
            {
                path : "/donations",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/card/:id",
                element : <CardItem></CardItem>,
                loader : () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRouter;