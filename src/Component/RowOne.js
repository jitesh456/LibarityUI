import React, { useEffect } from 'react'
import {Card} from 'react-bootstrap'
import {ReactComponent as People} from '../Assets/People.svg'
import {ReactComponent as Trophy} from '../Assets/Trophy.svg'
import {ReactComponent as Target} from '../Assets/target.svg'
import {ReactComponent as Check} from '../Assets/Check.svg'
import {useSelector} from 'react-redux';
import Aos from 'aos';
import "aos/dist/aos.css"

import '../Css/RowOne.scss'

export default function RowOne() {

    const menuInfo=useSelector(state=>state.liberity.menuInfo);
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[]);

    return (
        <div className="row-one" data-aos="fade-zoom-in" >
            <Card data-aos="fade-right">
                <div className="card-body">
                   <People className="icon-style"/> 
                   <div className="icon-info">
                        <div> New Users</div>
                        <div className="figure-style">{menuInfo.users}</div>
                    </div>
                </div>
            </Card>
            <Card   >
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
