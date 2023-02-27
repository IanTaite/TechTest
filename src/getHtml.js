import axios from "axios";

export default async function getHtml(url) {
  const html = await axios.get(url).then((result) => result.data);
  return html;
}
