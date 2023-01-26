/** @format */

import About from "./component/About.jsx";
import Home from "./component/Home.jsx";
import NavBar from "./component/NavBar.jsx";
import SocialLinks from "./component/SocialLinks.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
