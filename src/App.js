import React from 'react';
import './App.css';
import Country from './Country.js';
import Validate from './ValidateInput.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newName: "",
      newCode: "",
      name: "",
      code: "",
      display: false
    }
  }

  handleNameChange(event) {
    this.setState({
      newName: event.target.value
    });
  }

  handleCodeChange(event) {
    this.setState({
      newCode: event.target.value
    });
  }

  handleSubmit(event) {
    if (Validate(this.state.newName, this.state.newCode)) {
      this.setState({
        name: this.state.newName,
        code: this.state.newCode,
        display: true
      });
    }
    event.preventDefault();
  }

  render() {

    let countryDisplay = null;

   if (this.state.display) {
      countryDisplay = <Country name={this.state.name} code={this.state.code}/>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Country Stat Finder
          </p>
        </header>
        <div className="Search-Container">
          <table>
            <tbody>
              <tr>
                <td>
                  <form onSubmit={this.handleSubmit} >
                    <input className="Search-Bar" type="text" placeholder="Search by Name" value={this.state.newName} onChange={this.handleNameChange} aria-label="Search"/>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <form onSubmit={this.handleSubmit} >
                    <input className="Search-Bar" type="text" placeholder="Search by 3-Letter Code" value={this.state.newCode} onChange={this.handleCodeChange} aria-label="Search"/>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="Search-Button" type="submit" onClick={this.handleSubmit}>Search</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {countryDisplay}
      </div>
    );

  }
}

