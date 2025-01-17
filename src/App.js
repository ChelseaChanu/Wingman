import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";

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
