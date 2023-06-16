export type ReducerActionsTypes = "orundum" | "originium" | "tickets";

export interface ReducerActions {
  type: ReducerActionsTypes;
  payload: { orundum: number; originium: number; tickets: number };
}

export interface stateType {
  orundum: number;
  originium: number;
  tickets: number;
}

export const Actions = {
  ORUNDUM: "orundum",
  ORIGINIUM: "originium",
  TICKETS: "tickets",
};
