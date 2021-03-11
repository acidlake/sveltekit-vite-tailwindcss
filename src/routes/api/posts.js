export async function get(req){

  const test = await load();

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      return: req.path
    }
  }
}


export const post = (req) =>{
  
}