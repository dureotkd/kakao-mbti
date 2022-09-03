import { Route, Routes } from "react-router-dom";
import { Main, Onboarding1 } from "./pages";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/onboarding1" element={<Onboarding1 />} />
    </Routes>
  );
}

export default AppIndex;
