<script context="module">
	export const load = async({ fetch }) => {
		const query = `
			query Doubled($x: Int) {
				double(number: $x)
			}
		`;

		const variables = {
			x: 19,
		};

		const response = await fetch("/graphql", {
			body: { query, variables },
			headers: {
				"Authorization": "Token ABC123",
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { data, errors } = await response.json();

		if (errors) return {
			error: new Error(errors.map(({ message }) => message).join("\n")),
			status: 500,
		};

		return {
			props: {
				doubled: data.double,
			},
		};
	}
</script>
<script>
	import Counter from '$components/Counter.svelte';
	export let doubled;
</script>

<main>
	<h1 class="uppercase text-5xl font-extrabold my-16">Hello world!</h1>

	<Counter/>
	<p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
	<p>Visit <a href="/graphql">GraphiQL</a> to explore the API.</p>
</main>
