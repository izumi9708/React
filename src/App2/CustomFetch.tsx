export async function useFetch(url){
  const result = await fetch(url)

  return result.json();
}