// Lib
import { useReducer, useEffect } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

// Components
import Card from "./components/Card";
import { reducer } from "./reducer";
import { ReducerActionsTypes, stateType } from "./types";

// Assets
import ticket from "./assets/Headhunting_Permit.webp";
import originium from "./assets/Originite_Prime_icon.webp";
import orundum from "./assets/Orundum_icon.webp";
import bg from "./assets/f4aad0d3a16b9c8b4590b69c9b1c48b9.jpg";

function App() {
  const initialState = useReadLocalStorage<stateType>("Rolls") || {
    orundum: 0,
    originium: 0,
    tickets: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [, setCurrentRolls] = useLocalStorage("Rolls", state);

  const handleDispatch = (action: ReducerActionsTypes, payload: string) => {
    const data = { ...state };
    data[action] = parseInt(payload);
    dispatch({ type: action, payload: { ...data } });
  };

  const originiumCalc = isNaN(state.originium) ? 0 : state.originium * 180;
  const orundumCalc = isNaN(state.orundum) ? 0 : state.orundum;
  const ticketsCalc = isNaN(state.tickets) ? 0 : state.tickets * 600;

  const rolls = Math.floor((originiumCalc + orundumCalc + ticketsCalc) / 600);

  useEffect(() => {
    setCurrentRolls(state);
  }, [state, setCurrentRolls]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(101deg, rgba(0,0,0,0.6867121848739496) 0%, rgba(0,0,0,0.5466561624649859) 100%), url(${bg})`,
      }}
      className="flex justify-center w-full h-full p-4 overflow-x-hidden bg-center bg-cover font-lato"
    >
      <div className="flex flex-col justify-center gap-8 max-w-[900px]  p-4 w-full">
        <div className="mb-10 text-6xl font-bold text-center text-white">
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
          {rolls.toLocaleString("en-US")} Rolls
        </div>
      </div>
    </div>
  );
}

export default App;
