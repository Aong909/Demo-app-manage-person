import axios from "axios";
import { base_URL } from "../../util/constant";

const GetAllPersonService = async () => {
  const res = await axios.get(base_URL);
  return res;
};

export default GetAllPersonService;
