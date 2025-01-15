import { createRoot } from "react-dom/client";
import { HookApp } from "./HookApp";
import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(<CounterWithCustomHook />);
