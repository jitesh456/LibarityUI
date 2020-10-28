import React,{useState,useEffect} from 'react'
import '../Css/Sidebar.scss'
import {Nav,Navbar,Dropdown} from 'react-bootstrap'
import RowOne from '../Component/RowOne'
import RowTwo from '../Component/RowTwo'
import RowFour from '../Component/RowFour'
import {useDispatch} from 'react-redux';
import {setMenuInfo} from '../Redux/Action/liberityAction'
import LiberityService from '../Services/LibertyService';
import CustomTable from '../Component/CustomTable'
import Aos from 'aos';
import "aos/dist/aos.css"



export const DashBoard = () => {

    const [sidebar,setSideBar]=useState(false);
    const [sideBarOpen,setSideBarOpen]=useState("sidenav");
    const [navMargin,setNavMargin]=useState("");
    const dispatch = useDispatch();
    const openSideBar=()=>{
        if(sidebar){
            setSideBarOpen("sidenav-open")
            setNavMargin("nav-margin");
        }
        else{
            setSideBarOpen("sidenav")
            setNavMargin("");
        }
    }


    useEffect(()=>{
            LiberityService.menuInfo().then( response=>{
                dispatch(setMenuInfo(response.data));     
                });   
                Aos.init({
                    duration:2000
                })            
    },[dispatch]);

    const handleNav=()=>{
        setSideBar(!sidebar,openSideBar())
      }

    return (
        <div>
            <div  className={sideBarOpen}>
                
            </div>
            <Navbar  variant="dark" className={navMargin}>
            <Navbar.Brand style={{fontSize:"20px",cursor:"pointer"}} onClick={()=>{handleNav()}} >&#9776; </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link >
                <Dropdown>
                    <Dropdown.Toggle style={{color:"transperent"}} >
                        + Create New
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{top:"52px",borderradius:"0 !important" }}>
                    </Dropdown.Menu>
                    </Dropdown>
                </Nav.Link>
            </Nav>            
            </Navbar>
            <RowOne data-aos="flip-right"/>
            <RowTwo data-aos="fade-left"/>
            <CustomTable data-aos="fade-left"/>
            <RowFour data-aos="fade-right"/>
        </div>
    )
}
