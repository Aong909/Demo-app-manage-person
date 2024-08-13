import { useEffect, useState } from "react";
import PersonShow from "../PersonShow/PersonShow";
import { IPerson } from "../../util/interface";
import GetAllPersonService from "../../service/APIs/AllPerson";
import DeletePerson from "../../service/APIs/DeletePerson";
import EditPerson from "../../service/APIs/EditPerson";

const PersonList = () => {
  const [fetchPerson, setFetchPerson] = useState<IPerson[]>([]);
  const [listPerson, setListPerson] = useState<IPerson[]>([]);
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [country, setCountry] = useState("All");

  const callData = async () => {
    const data = await GetAllPersonService();
    setFetchPerson(data.data);
    setListPerson(data.data);
  };

  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    setListPerson(filter);
  }, [name, lastName, country]);

  const fetchCountry = fetchPerson.map((item) => item.country);
  const uniqCountry = [...new Set(fetchCountry)];

  const deletePersonById = (id: string) => {
    DeletePerson(id);
    const updatePerson = fetchPerson.filter((item: IPerson) => {
      return item.id !== id;
    });

    setFetchPerson(updatePerson);
  };

  const editPersonById = (person: IPerson) => {
    EditPerson(person);

    const updatePerson = fetchPerson.map((item) => {
      if (item.id === person.id) {
        return { ...person };
      }
      return item;
    });

    setFetchPerson(updatePerson);
  };

  const filter = () => {
    const filterCountry =
      country !== "All"
        ? fetchPerson.filter((item) => {
            return item.country === country;
          })
        : fetchPerson;
    const filterName =
      name !== ""
        ? filterCountry.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
          })
        : filterCountry;
    const filterLastName =
      lastName !== ""
        ? filterName.filter((item) => {
            return item.lastName.toLowerCase().includes(lastName.toLowerCase());
          })
        : filterName;

    return filterLastName;
  };

  return (
    <>
      <div className="flex justify-around gap-x-2 gap-y-4 px-[50px] mb-6">
        <div className="flex justify-between">
          <label className="text-white text-sm font-bold">Country:</label>
          <select
            className="px-1 rounded-md w-[180px]"
            defaultValue={"All"}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="All">All</option>
            {uniqCountry.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <label className="text-white text-sm font-bold">Name:</label>
          <input
            type="text"
            className="px-1 rounded-md w-[180px]"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white font-bold text-sm">Last-Name:</label>
          <input
            type="text"
            className="px-1 rounded-md w-[180px]"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 flex-wrap gap-2 h-[540px] overflow-auto">
        {listPerson.map((item) => {
          return (
            <PersonShow
              name={item.name}
              lastName={item.lastName}
              email={item.email}
              country={item.country}
              birth={item.birth}
              id={item.id}
              key={item.id}
              onDelete={deletePersonById}
              onEdit={editPersonById}
            />
          );
        })}
      </div>
    </>
  );
};

export default PersonList;
