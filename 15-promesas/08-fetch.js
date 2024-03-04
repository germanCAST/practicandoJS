const url = "https://jsonplaceholder.typicode.com/todos/a";
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response.status);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log({ e });
  });
