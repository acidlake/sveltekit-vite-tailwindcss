<script>
  //
  export let authorName = 'Jone Doe';
  export let authorAvatar = 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60';
  export let publishDate = '21 SEP 2015'
  export let authorProfileUrl = '#'

</script>
<div class="mt-4">
  <div class="flex items-center">
      <div class="flex items-center">
          <img class="object-cover h-10 rounded-full" src={authorAvatar} alt={authorName}>
          <a href={authorProfileUrl} class="mx-2 font-semibold text-gray-700 dark:text-gray-200">{authorName}</a>
      </div>
      <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{publishDate}</span>
  </div>
</div>