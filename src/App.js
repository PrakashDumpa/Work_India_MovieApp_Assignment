import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieCardItemDetails from "./components/MovieCardItemDetails";
import Layout from "./components/Layout";
import NotFoundView from "./ReUseableComponents/NotFoundView";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/popular" element={<Home />} />
        <Route exact path="/top_rated" element={<Home />} />
        <Route exact path="/upcoming" element={<Home />} />
        <Route exact path="/:id" element={<MovieCardItemDetails />} />
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
