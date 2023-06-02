import {Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Creator from "./pages/Creator/Creator";
import Term from "./pages/Term/Term";
import Privacy from "./pages/Privacy/Privacy";
import Careers from "./pages/Careers/Careers";
import PageNotFound from "./pages/PageNotFound/PageNotFound";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="creator" element={<Creator/>}/>
                    <Route path="term" element={<Term/>}/>
                    <Route path="privacy" element={<Privacy/>}/>
                    <Route path="careers" element={<Careers/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
