import axios from "axios";
import { IPerson } from "../../util/interface";
import { base_URL } from "../../util/constant";

const CreatePersonService = async ({
  name,
  lastName,
  country,
  birth,
  email,
}: IPerson) => {
  const params = {
    name: name,
    lastName: lastName,
    email: email,
    country: country,
    birth: birth,
  };
  await axios.post(base_URL, params);
};

export default CreatePersonService;
