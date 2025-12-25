import ReactDOM from 'react-dom/client';
import { Routes } from "./routes"
// import VConsole from 'vconsole';
import "./index.css"

// const vConsole = new VConsole();
// call `console` methods as usual
// remove it when you finish debugging
// vConsole.destroy();


const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<Routes />);
}
