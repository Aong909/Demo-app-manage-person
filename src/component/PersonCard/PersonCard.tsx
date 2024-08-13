import { IPerson } from "../../util/interface";

const PersonCard = (person: IPerson) => {
  const [year, month, day] = person.birth.split("-");

  return (
    <>
      <div className="flex">
        <img
          src={`https://picsum.photos/seed/${person.id}/100/100`}
          alt=""
          className="rounded-xl mr-4"
        />
        <div className="grid grid-cols-1 grid-flow-row ">
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Name: </span>
            <span>{person.name}</span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Last name: </span>
            <span>{person.lastName}</span>
          </div>

          <div className="flex items-center text-sm ">
            <span className=" font-bold">Birthday: </span>
            <span>{`${day ? day : "dd"}/${month ? month : "mm"}/${
              year ? year : "yyyy"
            }`}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className=" font-bold">Email: </span>
            <span>{person.email}</span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Country: </span>
            <span>{person.country}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
