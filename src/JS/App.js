import { AppUI } from "../AppUI.js";
import "../styles/styles.css"
import '../styles/App.css';
import { TodoProvider } from "../TodoContext";

function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}
export default App ;
