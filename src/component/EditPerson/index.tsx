import { useState } from "react";
import { IPersonService } from "../../util/interface";

const EditPerson = (person: IPersonService) => {
  const [name, setName] = useState(person.name);
  const [lastName, setLastName] = useState(person.lastName);
  const [birth, setBirth] = useState(person.birth);
  const [email, setEmail] = useState(person.email);
  const [country, setCountry] = useState(person.country);

  const handleClick = () => {
    person.onEdit({ ...person, name, lastName, birth, email, country });
  };

  return (
    <>
      <div className="flex relative">
        <button
          onClick={handleClick}
          className="absolute right-[2px] px-3 py-1 bg-green-700 rounded-lg text-sm text-white font-bold"
        >
          Save
        </button>
        <img
          src={`https://picsum.photos/seed/${person.id}/100/100`}
          alt=""
          className="rounded-xl mr-4"
        />
        <div className="grid grid-cols-1 grid-flow-row ">
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Name: </span>
            <span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Last name: </span>
            <span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </span>
          </div>

          <div className="flex items-center text-sm ">
            <span className=" font-bold">Birthday: </span>
            <span>
              <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className=" font-bold">Email: </span>
            <span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Country: </span>
            <span>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPerson;
