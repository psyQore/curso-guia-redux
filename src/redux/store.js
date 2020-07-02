// Metodo para crear el store
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Importando todos los reducer
import rootReducer from "./reducers";

// Middleware
const confirmDeleteTodo = (store) => (next) => (action) => {
  if (action.type === "DELETE_TODO") {
    let conf = window.confirm("Seguro que quieres eliminar el todo ?");

    if (conf) {
      next(action);
    }
  } else {
    next(action);
  }

  //   setTimeout(() => {
  //     next(action);
  //   }, 1000);

  //   if (action.type !== "ADD_TODO") {
  //     setTimeout(() => {
  //       store.dispatch({
  //         type: "ADD_TODO",
  //         payload: {
  //           text: "Todo Creado en Midleware",
  //           checked: false,
  //           id: "90sasasiajs",
  //         },
  //       });
  //     }, 4000);
  //   }
};

// Store
// Almacenamiento del nuestro estado
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({
  name: "Redux",
  realtime: true,
  trace: true,
  traceLimit: 20,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(confirmDeleteTodo, logger, thunk))
);

export default store;
