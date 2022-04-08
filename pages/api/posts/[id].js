import { data } from "../../../apiData";

const handler = ({ query: { id } }, res) => {
  console.log("data:", data);
  console.log("queryid:", id);
  const filtered = data.filter((post) => post.id.toString() === id);
  console.log("filtered:", filtered);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ error: "404-not found " });
  }
};
export default handler;
