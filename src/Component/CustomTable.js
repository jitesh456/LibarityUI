import React,{useEffect} from 'react'
import {Table} from 'react-bootstrap'
import LiberityService from '../Services/LibertyService';
import {setTableData} from '../Redux/Action/liberityAction';
import {useSelector,useDispatch} from 'react-redux';

 const CustomTable = () => {
    const tableData=useSelector(state=>state.profile.tableData);
    const dispatch=useDispatch();

    useEffect(()=>{
        LiberityService.getTableData().then(response=>{
            dispatch(setTableData(response.data));
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[dispatch]);

    const setTable=tableData.map(row=>{
        return(
            <tr>
            <td align="left">#{row[0]}</td>
            <td align="left">{row[1]}</td>
            <td align="left">{row[2]}</td>
            <td align="left">{row[3]}</td>
            <td align="left"><span style={{color:"white",background: row[7],borderRadius: "7px",padding: "5px"}}>{row[4]}</span></td>
            <td align="left"> ${row[5]}</td>
            <td align="left">{row[6]}</td>
         </tr> 
        )
        
    });
    return (
        <div style={{display: "flex",margin: "11px"}}>
            <Table >
            <thead>
                <tr>
                <th >ID</th>
                <th >Assignee</th>
                <th >Task Details</th>
                <th >Payment Method</th>
                <th >Payment Status</th>
                <th >Amount</th>
                <th >Tracking Number</th>
                </tr>
            </thead>
            <tbody>  
                {setTable}
            </tbody>
            </Table>
        </div>
    )
}
export default CustomTable