import { data } from "../../../apiData";

const handler = (req, res) => {
  res.status(200).json(data);
};
export default handler;
