export const UPDATE_NAME = "UPDATE_NAME";

// Funcion creadora de la accion
export const updateName = (name) => {
    return {
      type: UPDATE_NAME,
      payload: {
        name
      }
    };
  };
  