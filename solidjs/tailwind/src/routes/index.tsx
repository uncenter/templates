import Counter from "~/components/Counter";

export default function App() {
    return (
        <main class="text-center flex flex-col justify-center py-12">
            <h1 class="text-4xl font-bold">SolidStart + Tailwind CSS</h1>
            <p class="text-gray-500 dark:text-gray-400 mt-2">
                A SolidStart template with Tailwind CSS.
            </p>
            <Counter />
        </main>
    );
}
