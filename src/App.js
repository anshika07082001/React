import { useEffect, useRef, useState } from 'react';
import './App.css';
import Clock from './Components/Clock';

function App() {
  const countries=[
    ["Select Timezone",5.5],
    ["UTC(Universal Coordinated Time)",0],
    ["ECT(European Central Time)",1],
    ["EET(Eastern European Time)",2],
    ["ART((Arabic) Egypt Standard Time)", 2],
    ["EAT(Eastern African Time)",3],
    ["MET(Middle East Time)",3.5],
    ["NET(Near East Time)",4],
    ["PLT(Pakistan Lahore Time)",5],
    ["IST(India Standard Time)",5.5],
    ["BST(Bangladesh Standard Time)",6],
    ["VST(Vietnam Standard Time)",7],
    ["CTT(China Taiwan Time)",8],
    ["JST(Japan Standard Time)",9],
    ["ACT(Australia Central Time)",9.5],
    ["AET(Australia Eastern Time)",10],
    ["SST(Solomon Standard Time)",11],
    ["NST(New Zealand Standard Time)",12],
    ["MIT(Midway Islands Time)",-11],
    ["HST(Hawaii Standard Time)",-10],
    ["AST(Alaska Standard Time)",-9],
    ["PST(Pacific Standard Time)",-8],
    ["PNT(Phoenix Standard Time)",-7],
    ["MST(Mountain Standard Time)",-7],
    ["CST(Central Standard Time)",-6],
    ["EST(Eastern Standard Time)",-5],
    ["IET(Indiana Eastern Standard Time)",-5],
    ["PRT(Puerto Rico and US Virgin Islands Time)",-4],
    ["CNT(Canada Newfoundland Time)",-3],
    ["AGT(Argentina Standard Time)",-3],
    ["BET(Brazil Eastern Time)",-3],
    ["CAT(Central African Time)",-1],
    ];
  const [time, setTime] = useState();
  var intervalTime=useRef(0)
  
  const getCurrentTime = () => {
    let hour, minute, second;
    setTime(new Date().toLocaleTimeString({
      hour: hour,
      minute: minute,
      second: second,
    }))
  };
  useEffect(()=>{
    intervalTime.current=setInterval(getCurrentTime, 1000);
    return ()=> clearInterval(intervalTime.current)
  },[])
  const select=(e)=>{
    let offset=countries[e.target.selectedIndex][1];
    clearInterval(intervalTime.current)
    intervalTime.current=setInterval(function(){getTimezoneTime(offset);},1000)
  }
  const getTimezoneTime=(offset)=>{
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let hour, minute, second;
    setTime(new Date(utc + (3600000*offset)).toLocaleTimeString({
    hour: hour,
    minute: minute,
    second: second,
  }))
  }
  return (
    <div className="App">
      <Clock countries={countries} select={select} time={time}/>
    </div>
  );
}

export default App;
