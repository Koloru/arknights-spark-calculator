import { useReducer } from "react";
import ticket from "./assets/Headhunting_Permit.webp";
import originium from "./assets/Originite_Prime_icon.webp";
import orundum from "./assets/Orundum_icon.webp";
import bg from "./assets/bg.webp";
import Card from "./components/Card";

const ReducerActionsTypes = {
  ORUNDUM: "orundum",
  ORIGINIUM: "originium",
  TICKETS: "tickets",
};

export type ReducerActionsTypes = "orundum" | "originium" | "tickets";

interface ReducerActions {
  type: ReducerActionsTypes;
  payload: { orundum: number; originium: number; tickets: number };
}

function reducer(
  state: { orundum: number; originium: number; tickets: number },
  action: ReducerActions
) {
  const { type, payload } = action;

  switch (type) {
    case ReducerActionsTypes.ORIGINIUM:
    case ReducerActionsTypes.ORUNDUM:
    case ReducerActionsTypes.TICKETS:
      return { ...payload };
    default:
      return state;
  }
}

function App() {
  let rolls = 0;
  const [state, dispatch] = useReducer(reducer, {
    orundum: 0,
    originium: 0,
    tickets: 0,
  });

  const handleDispatch = (action: ReducerActionsTypes, payload: string) => {
    const data = { ...state };
    data[action] = parseInt(payload) || 0;
    dispatch({ type: action, payload: { ...data } });
  };

  rolls = (state.originium * 180 + state.orundum + state.tickets * 600) / 600;
  rolls = Math.floor(rolls);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(101deg, rgba(0,0,0,0.6867121848739496) 0%, rgba(0,0,0,0.5466561624649859) 100%), url(${bg})`,
      }}
      className="flex justify-center w-full h-full p-4 overflow-x-hidden bg-center bg-cover font-lato"
    >
      <div className="flex flex-col justify-center gap-8 max-w-[900px]  p-4 w-full">
        <div
          className="mb-10 text-6xl font-bold text-center text-white"
          onClick={() => console.log(state, "state")}
        >
          Arknights Spark Calculator
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card
            img={orundum}
            category="Orundum"
            action="orundum"
            state={state.orundum}
            dispatch={handleDispatch}
          />
          <Card
            img={originium}
            category="Originium"
            state={state.originium}
            action="originium"
            dispatch={handleDispatch}
          />
          <Card
            img={ticket}
            category="Headhunting Tickets"
            state={state.tickets}
            action="tickets"
            dispatch={handleDispatch}
          />
        </div>
        <div className="w-3/5 mx-auto text-2xl font-bold text-center bg-white">
          {rolls} Rolls
        </div>
      </div>
    </div>
  );
}

export default App;
