import types from "./types";

export function addBread() {
  return {
    type: types.ADD_BREAD,
  };
}

export function removeBread() {
  return {
    type: types.REMOVE_BREAD,
  };
}

export function addMeat() {
  return {
    type: types.ADD_MEAT,
  };
}

export function removeMeat() {
  return {
    type: types.REMOVE_MEAT,
  };
}

export function addCheese() {
  return {
    type: types.ADD_CHEESE,
  };
}

export function removeCheese() {
  return {
    type: types.REMOVE_CHEESE,
  };
}

export function addSalad() {
  return {
    type: types.ADD_SALAD,
  };
}

export function removeSalad() {
  return {
    type: types.REMOVE_SALAD,
  };
}
