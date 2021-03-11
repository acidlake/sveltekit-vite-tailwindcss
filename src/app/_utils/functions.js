let fetchData = async (ctx, url, endpoint, options = null, where = null) => {
  let responseData;
  if(where){
    await ctx.fetch(`${url}/${endpoint}/${where}`, options).then(response => response.json()).then(data => responseData = data);
  }else{
    await ctx.fetch(`${url}/${endpoint}`, options).then(response => response.json()).then(data => responseData = data);
  }
  

  return responseData;

}
let convertToSlug = (slug) =>{
  return slug
        .toString()
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

export {
  fetchData,
  convertToSlug
}