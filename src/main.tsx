
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Faster rendering with concurrent mode
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
