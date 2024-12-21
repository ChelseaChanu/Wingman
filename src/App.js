import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex items-start">
      <Sidebar/>
      <div className="grow flex flex-col justify-center">
        <Header/>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
