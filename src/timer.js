import React from 'react';
function TimerComponent(){
    const [time, setTime]=React.useState(0); 
    React.useEffect(function(){
            setTime(time+1)
    },[time])
    return (
        <div>
            <h3>{time}초</h3>            
        </div>
    )
}
export default TimerComponent;