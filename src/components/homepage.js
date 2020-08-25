
import React, { useEffect , useState} from 'react';


const Homepage=(props)=>{
    let country='';
    props.country===''?country='New York':country=props.country;
    const [state,setState]=useState(null);
    const [load,setLoad]=useState(false);
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
                    setLoad(true);
                })
            }
            
        }); 
        if(state===null){
            console.log('loading');
        }  
        else if(state!=null){
            setDetails({
                name:`${state.data.location.name}, ${state.data.location.country}`,
                date: state.data.location.localtime,
                temp:`${state.data.current.temp_c}°C`,
                type:state.data.current.condition.text,
                precipitation:`${state.data.current.precip_mm} mm`,
                wind:`${state.data.current.wind_dir} ${state.data.current.wind_kph} kph`,
                visibility:`${state.data.current.vis_km} km`,
                uv:state.data.current.uv,
                humidity:`${state.data.current.humidity}%`,
                pressure:`${state.data.current.pressure_mb} mb`
            })
        }
        // eslint-disable-next-line
    },[url,load]);
    const [details,setDetails]=useState({
        name:null,

    });
   
    return(
        <div className="slim">
        <div className="main">
            <div className="country">{details.name}</div>
            <div className="date">{details.date}</div>
            <div className="temp">{details.temp}</div>
            <div className="weather-details">{details.type}</div>
            <div className="weather-info">
                <div className="row">
                    <div className="info">
                        <div className="key">PRECIPITATION</div>
                        <div className="value">{details.precipitation}</div>
                    </div>
                    <div className="info">
                        <div className="key">UV INDEX</div>
                        <div className="value">{details.uv}</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row">
                    <div className="info">
                        <div className="key">WIND</div>
                        <div className="value">{details.wind}</div>
                    </div>
                    <div className="info">
                        <div className="key">HUMIDITY</div>
                        <div className="value">{details.humidity}</div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="row">
                    <div className="info">
                        <div className="key">VISIBILITY</div>
                        <div className="value">{details.visibility}</div>
                    </div>
                    <div className="info">
                        <div className="key">PRESSURE</div>
                        <div className="value">{details.visibility}</div> 
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </div>
        </div>
    );
}

export default Homepage;