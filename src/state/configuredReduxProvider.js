import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import rootReducer from "./index"

const store = createStore(rootReducer)

const ConfiguredReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default ConfiguredReduxProvider
