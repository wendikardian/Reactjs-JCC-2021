import { useState, useEffect } from 'react';
import './tugas10.css';

function Tugas10(){
    const locale = 'ina';
    const [today, setDate] = useState(new Date()); 
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => { 
        if(counter > 0){
            setDate(new Date());
            setCounter(counter - 1);
        }
    }, 1000);
    return () => {
        clearInterval(timer);
    }
    }, [counter] );
    


    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
        return(
            <>
            {counter > 0 &&  
                <div class="time">
                    <h1 class="nowat">Now At : {time}</h1>
                    <h3 class="countdown">Countdown : {counter}</h3>
                </div>
            }
            </>
        
    );
    
}

export default Tugas10;