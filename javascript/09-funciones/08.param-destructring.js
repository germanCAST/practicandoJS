const config = {
  url: "https://germancastellanos.com",
  direccion: {
    calle: "hola",
    numero: 80
  }
};

function webserver({ url, ...rest }) {
  console.log(rest);
  return url;
}

console.log(webserver(config));
