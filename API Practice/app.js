document.querySelector('#btn3').addEventListener('click', getAPI);

function getAPI(){
    fetch('https://api.openbrewerydb.org/breweries')
    .then((res) => {
        return res.json();
    })
    .then((data) =>{
        console.log(data);
        let result = `<h2>Top Daily News Headlines</h2>`;
       data.forEach((info)=>{
            const {id, name, brewery_type, street, city, state} = info
                result +=
                `<div>
                    <h4>ID: ${id}</h4>
                    <h5>Name: ${name}</h5>
                        <ul>
                            <li>Brewery Type: ${brewery_type}</li>
                            <li>street: ${ street}</li>
                            <li>city: ${city}</li>
                            <li>state: ${state}</li>
                        </ul>
                </div>`;
                document.querySelector('#result').innerHTML = result;
        });
   
    })
    .catch(function(error){
        console.log(error);
    })
}