/**
 * {
 *  url: ...
 *  bucket: amazon s3
 *  port 80
 * }
 *
 *
 *
 */
const config = {
  url: "https://germancastellanos.com"
};
function configurarAPI(url, bucket = 145, port = 80) {
  return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI("germancastellanos.com"));
