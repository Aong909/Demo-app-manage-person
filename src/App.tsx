import { useState } from "react";
import CreatePerson from "./component/CreatePerson";
import PersonList from "./component/PersonList";

function App() {
  const [createPage, setCreatePage] = useState(true);
  const [showPage, setShowPage] = useState(true);

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#9c38fa] to-[#1ed4fc] w-[960px] h-[680px] rounded-3xl p-4 m-auto  drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around px-[200px] font-bold mb-8">
        <button
          className="bg-[rgba(255,255,255,0.55)] text-[#148ca7] w-[200px] py-1 rounded-md drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)"
          onClick={() => {
            setCreatePage(true);
            setShowPage(false);
          }}
        >
          Create New Person
        </button>
        <button
          className="bg-[rgba(255,255,255,0.55)] text-[#6a25aa]  w-[200px] py-1 rounded-md drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)"
          onClick={() => {
            setCreatePage(false);
            setShowPage(true);
          }}
        >
          Show Person
        </button>
      </div>
      {(createPage && <CreatePerson />) || (showPage && <PersonList />)}
    </div>
  );
}

export default App;
