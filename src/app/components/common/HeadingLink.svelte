<script>
  //
  export let headingTitle = 'Your text goes here';
  export let headingTarget = '/';
</script>
<a 
href={headingTarget} 
alt={headingTitle}
class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
  {headingTitle}
</a>