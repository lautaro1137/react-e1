import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./screens/home_screen";
import { ContextMenu } from "./context/menu";

function App() {
  return (
    <BrowserRouter>
      <HomeScreen />;
    </BrowserRouter>
  );
}

export default App;
