import type { VoidComponent } from 'solid-js';

import { createSignal } from 'solid-js';

import { Button } from '@/components/ui/button';

const App: VoidComponent = () => {
	const [count, setCount] = createSignal(0);
	const inc = () => setCount(count() + 1);

	return (
		<main class="flex min-h-screen flex-col items-center justify-center bg-white gap-4">
			<h2 class="text-neutral-900 text-3xl tracking-tight font-semibold text-justify">
				{count()}
			</h2>
			<Button onClick={inc}>Increment</Button>
		</main>
	);
};

export default App;
