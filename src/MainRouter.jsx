import { Routes, Route } from "react-router-dom";
import Projects from "./components/projects";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Services from "./components/Services";

function MainRouter() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;