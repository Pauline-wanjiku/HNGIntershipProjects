

import { BrowserRouter, Routes,Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/zuriTeam">About</Link>
      </div>
      <Routes>
        <Route path="/zuriTeam" element={<ZuriTeam />} />
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
function ZuriTeam() {
    window.location.replace("https://training.zuri.team/");
}
export default App;
