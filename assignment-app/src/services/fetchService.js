export async function getdata(filter) {
  return fetch("/api/data/search?" + new URLSearchParams(filter));
}
