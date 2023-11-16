import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <Navbar></Navbar>
            <div className="mt-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;