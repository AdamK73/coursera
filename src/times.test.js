import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state when no matching action type", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const action = { type: "NON_EXISTENT_ACTION" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
