import React from 'react'
import {Card} from 'react-bootstrap'
import {ReactComponent as People} from '../Assets/People.svg'
import {ReactComponent as Trophy} from '../Assets/Trophy.svg'
import {ReactComponent as Target} from '../Assets/target.svg'
import {ReactComponent as Check} from '../Assets/Check.svg'
import {useSelector} from 'react-redux';

import '../Css/RowOne.scss'

export default function RowOne() {

    const menuInfo=useSelector(state=>state.liberity.menuInfo);

    return (
        <div className="row-one">
            <Card >
                <div className="card-body">
                   <People className="icon-style"/> 
                   <div className="icon-info">
                        <div> New Users</div>
                        <div className="figure-style">{menuInfo.users}</div>
                    </div>
                </div>
            </Card>
            <Card >
                <div className="card-body">
                    <Check className="icon-style"/>
                    <div className="icon-info">
                        <div>New Feedbacks</div> 
                        <div className="figure-style"> {menuInfo.feedbacks}</div>
                    </div>
                </div>
            </Card>
            <Card >
                <div className="card-body">
                  <Trophy className="icon-style"/> 
                  <div className="icon-info">
                        <div>Employees</div> 
                        <div className="figure-style">{menuInfo.employees}</div>
                  </div>                    
                </div>
            </Card>
            <Card >
                <div className="card-body">
                    <Target className="icon-style"/>
                    <div className="icon-info">
                        <div>Total Sales</div> 
                        <div className="figure-style">{menuInfo.sales}</div>
                    </div>                                         
                </div>
            </Card>
        </div>
    )
}
