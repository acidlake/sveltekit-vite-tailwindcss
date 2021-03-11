<script context="module">
  // Core
  import { fetchData } from "$utils/functions";
	import { APIURL } from "$utils/constants";
  // Core Functions
	export async function load(ctx){
    // Options
    const postId = ctx.page.params.id;
		const fetchOptions = {
			url: APIURL,
			endpoint: 'posts',
      where: postId,
			options: {
				
			}
		}
		// Call our fetch
    const post = await fetchData(ctx, fetchOptions.url, fetchOptions.endpoint, fetchOptions.options, fetchOptions.where);
		// Return our data
    return { props: { post } }
  }

</script>
<script>
  //
  import Post from "$components/blog/post.svelte";

  export let post;
</script>

<div class="max-w-2xl mb-10 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
  <div id="post">
        <Post 
          categoryName="Test Category" 
          headingTitle={post.title} 
          paragraph={post.body} 
          postId="#" 
          postSlug="#"
        />
  </div>
</div>