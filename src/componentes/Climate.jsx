import axios from 'axios';
import { useState, useEffect } from 'react';
import CityList from './CityList.json'

const Climate = () => {
    const [weather, setweather] = useState({})
  const [change,setchange] = useState({})

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(success);

        function success(pos) {
            const crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=c52daf50fc7d07273c433b5eb5834dbe`)
                .then(res => setweather(res.data))

        }


    }, [])



    return (
        <div className='bg'>
            <div className='cardClimate'>
                <div className='boxTitle'>
                    <h1 className='title'>local weather</h1>
                </div>
                <div className='container'>
                    <div className='boxCountry'>
                        <div>
                            <img className='img' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
                        </div>
                        <p>country : <span>{weather.sys?.country}</span></p>

                    </div>
                    <div className='temperature'>
                        <p className='number'> {weather.main?.temp} Kº</p>
                        <p>temperature</p>
                    </div>
                </div>
                    <div className='measures'>
                        <p>humidity : {weather.main?.humidity}</p>
                        <p>pressure : {weather.main?.pressure}</p>
                    </div>
                    <div className='button'>change temp. Cº</div>
                





            </div>
        </div>
    );
};

export default Climate;