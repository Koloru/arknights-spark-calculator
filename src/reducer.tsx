import { Actions, ReducerActions, stateType } from "./types";

export function reducer(state: stateType, action: ReducerActions) {
  const { type, payload } = action;

  switch (type) {
    case Actions.ORIGINIUM:
    case Actions.ORUNDUM:
    case Actions.TICKETS:
      return { ...payload };
    default:
      return state;
  }
}

