import React from 'react'
import { Line } from "react-chartjs-2";



const SimpleChart = (props) => {
    return (
        <div style={{width:"100%",height:"100%"}}>
            <Line  data={props.data}  options={props.option}/>            
        </div>
    )
}

export default SimpleChart

