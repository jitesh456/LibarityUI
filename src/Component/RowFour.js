import React from 'react'
import {Card} from 'react-bootstrap'
import SampleBarChart from '../Component/SampleBarChart'
const RowFour = () => {
    return (
        <div style={{display:"flex"}}>
            <Card style={{height:"300px"}}>
                <div>
                <h6>The Current Chart</h6>
                <SampleBarChart/>
                </div>
            </Card>
            <Card>
            </Card>
        </div>
    )
}
export  default RowFour