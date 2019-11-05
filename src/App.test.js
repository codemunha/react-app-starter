// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })
import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

it("renders without crashing", () => {
  const { getByText } = render(<App />)
  expect(getByText("Learn React")).toBeInTheDocument()
})
