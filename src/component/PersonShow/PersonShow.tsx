import { useState } from "react";
import { IPerson, IPersonService } from "../../util/interface";
import EditPerson from "../EditPerson";
import PersonCard from "../PersonCard/PersonCard";

const PersonShow = (person: IPersonService) => {
  const [editPage, setEditPage] = useState(false);

  const handleClickDelete = () => {
    person.onDelete(person.id);
  };

  const handleClickEdit = () => {
    setEditPage(true);
  };

  const handleSubmitEdit = (param: IPerson) => {
    person.onEdit(param);
    setEditPage(false);
  };

  let content = (
    <PersonCard
      name={person.name}
      lastName={person.lastName}
      country={person.country}
      birth={person.birth}
      email={person.email}
      id={person.id}
    />
  );
  if (editPage) {
    content = (
      <EditPerson
        name={person.name}
        lastName={person.lastName}
        country={person.country}
        birth={person.birth}
        email={person.email}
        id={person.id}
        onDelete={person.onDelete}
        onEdit={handleSubmitEdit}
      />
    );
  }

  return (
    <div className="w-[420px] h-[240px] bg-white rounded-xl p-[20px]">
      {content}
      <div className="flex justify-around items-center h-[100px] text-white font-bold">
        <button
          onClick={handleClickEdit}
          className="w-[100px] h-[40px] rounded-lg bg-blue-500"
        >
          Edit
        </button>
        <button
          onClick={handleClickDelete}
          className="w-[100px] h-[40px] rounded-lg bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PersonShow;
