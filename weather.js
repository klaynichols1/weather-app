//used to get weather API infomation
const key = 'UQl2Yku2KAue08PeZsBRBVlVp5Cf9hRR';


//will use to get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};
//will use to get the weather conditions

const getConditions = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
}



