import { createRoot } from "react-dom/client";
import { HookApp } from "./HookApp";
import { CounterApp } from "./components/01-useState/CounterApp";

createRoot(document.getElementById("root")).render(<CounterApp />);
