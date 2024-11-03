function getData() {
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7e73e58a52msha05a457ad8a7fcdp13c2d4jsn699918ade86c',
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            temp.innerHtml = res.temp;
            ws.innerHtml = res.wind_speed;
            hmdty.innerhtml = res.humidity;
        })
        .catch(err => console.error(err));
}

/* Ye walla project nhi cahl raha h kyu ki iske api ko kharida nhi gaya hai baki sab thik h bus api ke nahi chalne se kam nhi kr raha h....  
/** Agar free walla api hota to ye achha se cahl raha hota.. */