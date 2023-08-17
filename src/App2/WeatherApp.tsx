import * as React from 'react';
import {useState,useEffect} from 'react';

import './css/WeatherApp.css';

interface WeatherObj {
  coord:{
    lat:number;
    lon:number;
  };
  main:{
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name:string;
  weather:{
    description: string
    icon: string
    id: number
    main: string
  }[]
  cod:string;
}

function WeatherApp(){
  const [weatherObj,setWeatherObj] = useState<WeatherObj>();

  type GetWeather<T> = (val:string) => Promise<T>;
  const getWeather:GetWeather<WeatherObj> = async(val) => {
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&lang=ja&appid=5fd5e4b2c8f430197fbfddfe9c328c2f`);

      return result.json();

    }catch(er){
      console.error(er);
    }

  }

  const weatherInfo = ():void => {
    const val = (document.querySelector('.weather-input') as HTMLInputElement).value;

    getWeather(val)
    .then(res => setWeatherObj(res))
    .catch(er => console.error(er))
  }


  return (
    <div className="weather-app wrap">
      ウェザーアプリ
      <div className="weather-content">
        <p className="weather-text">国名、都市名を半角英語で入力してください</p>
        <input className="weather-input" type="text" placeholder="例）tokyo"/>
        <button type="button" className="weather-search"
          onClick={weatherInfo}
        >表示</button>
        
        <div className="weather-display">
        { (weatherObj) && (weatherObj.cod == '200')
        ?
       ( <div className="weather-item">
          <p className="local-name">{weatherObj.name}</p>
          <div className="local-container">
            <div className="local-img"><img src={`https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`}/></div>
            <p className="local-temp">{weatherObj.main.temp}<span>℃</span></p>
          </div>
        </div>)
        :
        (weatherObj && <p>存在しません</p>)
        }
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;
