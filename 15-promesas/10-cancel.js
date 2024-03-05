let controller = new AbortController();
let { signal } = controller;

async function getTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
}

getTodos();
controller.abort();
