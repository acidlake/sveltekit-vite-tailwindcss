<script context="module">
  // Core
  import { fetchData } from "$utils/functions";
	import { APIURL } from "$utils/constants";
  // Core Functions
	export async function load(ctx){
    // Options
		const limit = 10;
		const fetchOptions = {
			url: APIURL,
			endpoint: `posts?_limit=${limit}`,
			options: {
				
			}
		}
		// Call our fetch
    const postsData = await fetchData(ctx, fetchOptions.url, fetchOptions.endpoint, fetchOptions.options);
		// Return our data
    return { props: { postsData } }
  }

</script>
<script>
  //
  import Posts from "$components/blog/posts.svelte";

  export let postsData;
</script>

<Posts  {postsData}/>