<script>
  // Core Components
  import Post from "$components/blog/Post.svelte";
  import Heading from "$components/common/Heading.svelte";
  
  // Vars
  export let postsData;
</script>
{#await postsData}
  <Heading headingTitle="Loading.."/>
{:then posts} 
  {#each posts as post}
    <div class="max-w-2xl mb-10 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div id="post">
            <Post 
              categoryName="Test Category" 
              headingTitle={post.title} 
              paragraph={post.body} 
              postId={post.id} 
              postSlug={post.title} 
            />
      </div>
    </div>
  {/each}
{/await}