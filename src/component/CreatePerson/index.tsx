import { useEffect, useState } from "react";
import CreatePersonService from "../../service/APIs/CreatePerson";
import PersonCardPreview from "../PersonCard/PersonCardPreview";
import AllCountry from "../../service/APIs/AllCountry";
import { IAllCountry } from "../../util/interface";
import {
  FormEvent,
  ChangeEventInput,
  ChangeEventSelect,
} from "../../util/eventType";

const CreatePerson = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const id = "";
  const [allCountry, setAllCountry] = useState<IAllCountry>([]);

  const callAllCountry = async () => {
    const data = await AllCountry();
    setAllCountry(data);
  };

  useEffect(() => {
    callAllCountry();
  }, []);

  const handleChangeName = (e: ChangeEventInput) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEventInput): void => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e: ChangeEventInput): void => {
    setEmail(e.target.value);
  };

  const handleChangeCountry = (e: ChangeEventSelect): void => {
    setCountry(e.target.value);
  };

  const handleChangeBirth = (e: ChangeEventInput): void => {
    setBirth(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    CreatePersonService({ name, lastName, country, birth, email, id });

    setName("");
    setLastName("");
    setCountry("");
    setBirth("");
    setEmail("");
  };

  return (
    <div>
      <div className="flex justify-center p-2 mb-3 text-white font-bold text-[28px]">
        Create New Person
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-y-4 gap-x-[100px] px-[100px] mb-10">
          <div className="flex justify-between">
            <label htmlFor="" className="text-white font-bold">
              Name:
            </label>
            <input
              type="text"
              onChange={handleChangeName}
              value={name}
              className="px-1 rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <label className="text-white font-bold">Last-Name:</label>
            <input
              type="text"
              onChange={handleChangeLastName}
              value={lastName}
              className="px-1 rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-white font-bold">
              Email:
            </label>
            <input
              type="email"
              onChange={handleChangeEmail}
              value={email}
              className="px-1 rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-white font-bold">
              Country:
            </label>

            <select
              className="px-1 rounded-md w-full"
              onChange={handleChangeCountry}
            >
              {allCountry.map((item, index) => {
                return (
                  <option value={item.name.common} key={index}>
                    {item.name.common}
                  </option>
                );
              })}
              <option value={""} hidden>
                select country
              </option>
            </select>
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-white font-bold">
              Birth Day:
            </label>
            <input
              type="date"
              onChange={handleChangeBirth}
              value={birth}
              placeholder="yyyy-dd-mm"
              className="px-1 rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-green-700 text-white font-bold hover:bg-green-600 px-[100px] py-[10px] rounded-xl"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
      <div className="flex justify-center my-10">
        <PersonCardPreview
          name={name}
          lastName={lastName}
          email={email}
          country={country}
          birth={birth}
          id={id}
        />
      </div>
    </div>
  );
};

export default CreatePerson;
