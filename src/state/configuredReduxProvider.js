import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
// import logger from "redux-logger"

import rootReducer from "./index"
import { loadState, saveState } from "./localStorage"

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, applyMiddleware())

store.subscribe(() => {
  saveState(store.getState())
})

const ConfiguredReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default ConfiguredReduxProvider
