
import React, { useEffect , useState} from 'react';


const Homepage=(props)=>{
    let country='';
    props.country===''?country='New York':country=props.country;
    const [state,setState]=useState({data:null});
  
    let url=`https://api.weatherapi.com/v1/current.json?key=78e4667bbcdc444495f91348202108&q=${country}`;

 
    useEffect(()=>{
    fetch(url)
        .then(res=>{
            if(res.status!==200){
                alert('No matching location found!');
            }
            else{
                res=res.json()
                .then(data=>{
                    setState({data:data});
                })
            }
            
        })
    },[url]);
  let name,date,temp,type,gust,wind,visibility,uv,humidity,pressure='';
  if(state.data!=null){
     name=`${state.data.location.name}, ${state.data.location.country}`;
     date=state.data.location.localtime;
     temp=`${state.data.current.temp_c}°C`;
     type=state.data.current.condition.text;
     gust=`${state.data.current.gust_kph} km/hr`;
     wind=`${state.data.current.wind_kph} km/hr`;
     visibility=`${state.data.current.vis_km} km`;
     uv=state.data.current.uv;
     humidity=`${state.data.current.humidity}%`;
     pressure=`${state.data.current.pressure_mb} mb`;
  }
     
  

    return(
        <div className="slim">
        <div className="main">
            <div className="country">{name}</div>
            <div className="date">{date}</div>
            <div className="temp">{temp}</div>
            <div className="weather-details">{type}</div>
            <div className="weather-info">
                <div className="row">
                    <div className="info">
                        <div className="key">GUST</div>
                        <div className="value">{gust}</div>
                    </div>
                    <div className="info">
                        <div className="key">UV INDEX</div>
                        <div className="value">{uv}</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row">
                    <div className="info">
                        <div className="key">WIND</div>
                        <div className="value">{wind}</div>
                    </div>
                    <div className="info">
                        <div className="key">HUMIDITY</div>
                        <div className="value">{humidity}</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row">
                    <div className="info">
                        <div className="key">VISIBILITY</div>
                        <div className="value">{visibility}</div>
                    </div>
                    <div className="info">
                        <div className="key">PRESSURE</div>
                        <div className="value">{pressure}</div> 
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </div>
        </div>
    );
}

export default Homepage;