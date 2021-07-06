import React from "react";
import TitlesList from "./components/TitlesList";

export default class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Selected: frontend</h1>
  
        <select>
          <option value="frontend" selected>frontend</option>
          <option value="reactjs">reactjs</option>
        </select>
  
        <span>Las updated at { Date.now() }</span>
        <input type="button" value="Refresh" />

        <TitlesList />
      </main>
    );
  }
}
