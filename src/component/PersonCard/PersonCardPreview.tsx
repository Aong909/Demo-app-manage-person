import { IPerson } from "../../util/interface";

const PersonCardPreview = ({
  name,
  lastName,
  country,
  email,
  birth,
}: IPerson) => {
  const date = birth.split("-");
  const [year, month, day] = date;

  return (
    <div className="w-[420px] h-[240px] bg-white rounded-xl p-[20px]">
      <div className="flex">
        <img
          src="https://picsum.photos/100/100"
          alt=""
          className="rounded-xl mr-4"
        />
        <div className="grid grid-cols-1 grid-flow-row ">
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Name: </span>
            <span>{name}</span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Last name: </span>
            <span>{lastName}</span>
          </div>

          <div className="flex items-center text-sm ">
            <span className=" font-bold">Birthday: </span>
            <span>{`${day ? day : "dd"}/${month ? month : "mm"}/${
              year ? year : "yyyy"
            }`}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className=" font-bold">Email: </span>
            <span>{email}</span>
          </div>
          <div className="flex items-center text-sm capitalize">
            <span className=" font-bold">Country: </span>
            <span>{country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCardPreview;
