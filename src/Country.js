import React from "react";
import './Countries.css';
import SearchCountry from './SearchCountry.js';

export default class Country extends React.Component {

    render() {

        let searchName = this.props.name;
        let searchCode = this.props.code;

        var countries = [];

        let url = "https://restcountries.eu/rest/v2/";

        // Prioritize 3-Letter Code
        if (searchCode !== "") {
            url = url + 'alpha/' + searchCode;
            countries = SearchCountry(url);
        } else if (searchName !== "") {
            url = url + 'name/' + searchName;
            countries = SearchCountry(url);
        } else {
            return <p>Please enter a country or country code</p>;
        }

        var tablerows = [];
        var count = 0;
        
        countries.forEach(country => {
            console.log(country);
            let row = [];
            row.push(<td key={"name"+count} className="entry">{country.name}</td>);
            row.push(<td key={"code"+count} className="entry">{country.code}</td>);
            row.push(<td key={"capital"+count} className="entry">{country.capital}</td>);            
            row.push(<td key={"population"+count} className="entry">{country.population}</td>);
            tablerows.push(<tr key={count}>{row}</tr>);
            count++;
        });

        return(
            <div>
                <table className="Country-Table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Capital</th>
                            <th>Population</th>
                        </tr>
                        {tablerows}
                    </tbody>
                </table>
            </div>
        );
    }

}