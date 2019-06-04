import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"

import rootReducer from "./index"

const store = createStore(rootReducer, applyMiddleware(logger))

const ConfiguredReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default ConfiguredReduxProvider
