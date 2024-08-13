import axios from "axios";
import { IPerson } from "../../util/interface";
import { base_URL } from "../../util/constant";

const EditPerson = (person: IPerson) => {
  axios.put(base_URL + `/${person.id}`, {
    name: person.name,
    lastName: person.lastName,
    email: person.email,
    country: person.country,
    birth: person.birth,
  });
};

export default EditPerson;
