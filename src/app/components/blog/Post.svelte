<script>
  // Core
  import { convertToSlug } from "$utils/functions";
  // Core Components
  import Author from "$components/blog/common/Author.svelte";
  import CategoryName from "$components/blog/common/CategoryName.svelte";
  import CoverImage from "$components/blog/common/CoverImage.svelte";
  import HeadingLink from "$components/common/HeadingLink.svelte";
  import Paragraph from "$components/common/Paragraph.svelte";

  export let categoryName;
  export let paragraph;
  export let headingTitle;
  export let postSlug;
  export let postId;
</script>
<CoverImage />
  <div class="p-6">
      <div>
          <CategoryName {categoryName} />
          <HeadingLink {headingTitle} headingTarget={`/blog/${convertToSlug(postSlug)}/${postId}`} />
          <Paragraph  {paragraph}/>
      </div>
      <Author />
  </div>