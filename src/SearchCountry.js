
export default function SearchCountry(url) {

    let countries = [];
    
    var request = new XMLHttpRequest();

    request.open('GET', url, false);
    request.onload = function() {

        var data = JSON.parse(this.response);
        if (Array.isArray(data)) {
            data.forEach(country => {
                let newCountry = {
                    name: country['name'],
                    code: country['alpha3Code'],
                    capital: country['capital'],
                    population: country['population']
                }
                countries.push(newCountry);
            });
        } else {
            let newCountry = {
                name: data['name'],
                code: data['alpha3Code'],
                capital: data['capital'],
                population: data['population']
            }
            countries.push(newCountry);
        }

    }
    request.send();

    return countries;

}