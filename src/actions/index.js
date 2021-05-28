export const add = (name) => {
  return {
    type: "add",
    payload: name
  };
};

export const del = (name) => {
  return {
    type: "delete",
    payload: name
  };
};
