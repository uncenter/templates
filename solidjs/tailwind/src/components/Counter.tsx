import { createSignal } from "solid-js";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    return (
        <div class="mt-4 flex flex-row items-center justify-center bg-gray-100 rounded p-2 w-32 mx-auto">
            <div class="flex flex-col items-center">
                <button
                    class="font-bold text-white bg-gray-500 rounded hover:bg-gray-600 px-2 py-1"
                    onClick={() => setCount(count() + 1)}
                >
                    &uarr;
                </button>
                <button
                    class="font-bold text-white bg-gray-500 rounded hover:bg-gray-600 px-2 py-1 mt-1"
                    onClick={() => setCount(count() - 1)}
                >
                    &darr;
                </button>
            </div>
            <pre class="w-16 px-2 py-1 ml-2 text-center text-gray-700 bg-gray-200 rounded">
                {count().toString()}
            </pre>
        </div>
    );
}
