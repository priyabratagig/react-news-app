import { Provider } from "react-redux";
import { Store } from "./redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar, PageNotFound } from "./Components";
import { Bollywood, Fitness, Food, Hollywood, Home, ScienceAndTechnology } from "./Layouts";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar className="mb-4" />}>
            <Route index element={<Home />} />
            <Route path="bollywood" element={<Bollywood />} />
            <Route path="fitness" element={<Fitness />} />
            <Route path="food" element={<Food />} />
            <Route path="hollywood" element={<Hollywood />} />
            <Route path="home" element={<Navigate to='/' />} />
            <Route path="tech" element={<ScienceAndTechnology />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        {/* <Bollywood />
        <Hollywood /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
