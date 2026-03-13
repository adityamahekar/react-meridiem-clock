import React, {useState, useEffect} from 'react'

function Clock() {

    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const interValid = setInterval(()=>{
            setTime(new Date());
        },1000)

        return () => {
            clearInterval(interValid);
        }
    }, [])

    function formatTime(){
        let hr = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hr >= 12 ? "PM" : "AM";

        hr = hr%12 || 12;

        return `${padZero(hr)}:${padZero(min)}:${padZero(sec)} ${meridiem}`;

    }

    function padZero(number){
            return (number < 10 ? "0" : "") + number;
    }
  return (
    <div>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  )
}

export default Clock
