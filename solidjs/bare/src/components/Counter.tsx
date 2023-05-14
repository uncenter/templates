import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    return (
        <div class="container">
            <div class="button-group">
                <button onClick={() => setCount(count() + 1)}>&uarr;</button>
                <button onClick={() => setCount(count() - 1)}>&darr;</button>
            </div>
            <pre class="result">{count().toString()}</pre>
        </div>
    );
}
