import axios from "axios";

const AllCountry = async () => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  const data = res.data;
  return data;
};

export default AllCountry;
