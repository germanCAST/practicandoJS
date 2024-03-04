const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url, {
  method: "POST", //? PUT, PATCH, DELETE, GET <-default
  body: JSON.stringify({ title: "HOLA MUNDO" }),
  headers: {
    "Content-Type": "application/json",
    Authorization: "api key"
  },
  cache: "no-cache" //default,reload,force-cache, only-if-cached
})
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
