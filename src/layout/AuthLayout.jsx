import { Outlet } from "react-router";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <MyContainer className={'py-6 bg-base-200 min-h-screen'}>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </MyContainer>
    );
};

export default AuthLayout;