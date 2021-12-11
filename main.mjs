//Здесь два примера решения задачи.
//Использование в решении await - закомментировано.
//Не забудь про async


const serverUrl = 'https://api.genderize.io';
const countryUrl = 'https://api.nationalize.io';

document.getElementById('btn').addEventListener('click', checkName);

function checkName() {
    let firstName = document.getElementById('name').value;
    const urlCheckGender = `${serverUrl}?name=${firstName}`;
    const urlCheckCountry = `${countryUrl}?name=${firstName}`;

//1 решение await
    // let responseCheckGender = await fetch(urlCheckGender);
    // let jsonCheckGender = await responseCheckGender.json();
    // let gender = jsonCheckGender.gender
    //
    // let responseCheckCountry = await fetch(urlCheckCountry);
    // let jsonCheckCountry = await responseCheckCountry.json();
    // let countryArr = jsonCheckCountry.country;
    // let country = '';
    // countryArr.forEach(item => country += item.country_id + ', ')
    //
    // alert(firstName + ' is ' + gender + ' from: ' + country );

//2 решение .then
    fetch(urlCheckGender)
        .then(response => response.json())
        .then(user => alert(user.gender))

    fetch(urlCheckCountry)
        .then(response => response.json())
        .then(user => {
            let country = '';
            user.country.forEach(item => country += item.country_id + ', ')
            alert(country);
        })
}
