import ReactDOM from 'react-dom/client';
import { Routes } from "./routes"
import "./index.css"

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<Routes />);
}
