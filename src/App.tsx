import MainRoutes from "./Routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
