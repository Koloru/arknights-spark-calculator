import { useReducer } from "react";
import Card from "./components/Card";

import ticket from "./assets/Headhunting_Permit.webp";
import originium from "./assets/Originite_Prime_icon.webp";
import orundum from "./assets/Orundum_icon.webp";
import bg from "./assets/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpeg";

const ReducerActionsTypes = {
  ORUNDUM: "Orundum",
  ORIGINIUM: "Originium",
  TICKETS: "Tickets",
};

type ReducerActionsTypes = "Orundum" | "Originium" | "Tickets";

interface ReducerActions {
  type: ReducerActionsTypes;
  payload: { orundum: number; tickets: number; originium: number };
}

function reducer(
  state: { orundum: number; tickets: number; originium: number },
  action: ReducerActions
) {
  const { type, payload } = action;
  
  switch (type) {
    case ReducerActionsTypes.ORIGINIUM:
    case ReducerActionsTypes.ORUNDUM:
    case ReducerActionsTypes.TICKETS:
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    orundum: 0,
    tickets: 0,
    originium: 0,
  });

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(101deg, rgba(0,0,0,0.6867121848739496) 0%, rgba(0,0,0,0.5466561624649859) 100%), url(${bg})`,
      }}
      className="flex justify-center w-full h-full p-4 overflow-x-hidden bg-center bg-cover font-lato"
    >
      <div className="flex flex-col gap-8 max-w-[900px] border border-white rounded-md p-4 w-full">
        <div className="text-2xl font-bold text-center text-white">
          Arknights Spark Calculator
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Card img={orundum} category="Orundum" />
          <Card img={originium} category="Originium" />
          <Card img={ticket} category="Headhunting Tickets" />
        </div>
      </div>
    </div>
  );
}

export default App;
