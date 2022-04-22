import CustomRoutes from "./config/CustomRoutes";
import "@splidejs/react-splide/css";

import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
    return (
        <div className="main_wrapper">
            <Sidebar />
            <div>
                <CustomRoutes />
                <Footer />
            </div>
        </div>
    );
}

export default App;
