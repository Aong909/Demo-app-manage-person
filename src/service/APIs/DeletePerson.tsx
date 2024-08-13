import axios from "axios";
import { base_URL } from "../../util/constant";

const DeletePerson = (id: string) => {
  axios.delete(base_URL + `/${id}`);
};

export default DeletePerson;
