import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound.tsx";
import Toolbar from "./components/Toolbar.tsx";
import Home from "./containers/Home.tsx";
import AdminDashboard from "./containers/AdminDashboard.tsx";

function App() {
    return (
        <div>
            <header>
                <Toolbar />
            </header>
            <main>
                <Routes>
                    <Route path="/admin/*" element={<AdminDashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
