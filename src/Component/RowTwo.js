import React,{useEffect} from 'react'
import {Card,Image,Button} from 'react-bootstrap'
import '../Css/RowTwo.scss'
import LiberityService from '../Services/LibertyService';
import {setProfile,setProduct,setSupport,setStore,setSalesInfo} from '../Redux/Action/liberityAction';
import {useSelector,useDispatch} from 'react-redux';
import SimpleChart from './SimpleChart';


    

  const options = {
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
              display: false
          }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }
            , ticks: {
              display: false
          }   
        }]
    },
    legend: {
      display: false
  }
  }
  const options2 = {
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
              display: true
          }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }
            , ticks: {
              display: true
          }   
        }]
    },
    legend: {
      display: false
  }
  }
  
const RowTwo = () => {

    const profile=useSelector(state=>state.profile.profile);
    const product=useSelector(state=>state.profile.product);
    const data=useSelector(state=>state.profile.support)
    const data2 = useSelector(state=>state.profile.salesInfo)
    const store=useSelector(state=>state.profile.store)
    const dispatch=useDispatch();
    useEffect(()=>{
        
        const fetchData=async()=>{
             await LiberityService.profile().then( response=>{                      
                        dispatch(setProfile(response.data)); 
                 }).catch(error=>{
                     console.log(error)
                 });
             await LiberityService.product().then( response=>{
                console.log(response.data)
                dispatch(setProduct(response.data));
                
                 }).catch(error=>{
                     console.log(error);
                 });
             await LiberityService.support().then( response=>{
                console.log(response)
                dispatch(setSupport(response.data));    
                }).catch(error=>{
                    console.log(error);
             });
             await LiberityService.sales().then( response=>{
                console.log(response)
                dispatch(setStore(response.data));    
                }).catch(error=>{
                    console.log(error);
             });
             await LiberityService.salesInfo().then( response=>{
                console.log(response)
                dispatch(setSalesInfo(response.data));    
                }).catch(error=>{
                    console.log(error);
             });                        
        }
          fetchData();   
    },[dispatch])


    return (
        <div className="row-two-container">
            <Card  className="row-two-card">
                <div className="card-header-content">                
                    <Image className="profile-image" src="https://i.ibb.co/FYG9N4K/dp.jpg" roundedCircle />
                    <spam className="profile-name">James smith</spam>
                    <spam style={{color: "silver"}}>Developer</spam>
                </div>
                <div className="card-body-content">                
                    <spam style={{fontSize:"13px"}}>Researching, designing, implementing and managing software programs. 
                        Testing and evaluating new programs.</spam>
                        <Button id="button" variant="primary">Follow</Button>
                </div>
                <div className="card-footer-content" > 
                <hr style={{width:"80%"}}></hr>               
                    <div className="card-footer-items">
                        <div >
                            {profile.post}
                            <p>Post</p>
                        </div>
                        <div>
                        {profile.followers}
                            <p>Followers</p>
                        </div>
                        <div>
                        {profile.likes}
                            <p>Likes</p>
                        </div>                        
                    </div>
                </div>
            </Card>
            <Card className="row-two-card">
                <div class="row-two-card-header">                
                    <spam class="row-two-card-containt" >Top Products</spam>
                    <spam class="row-two-card-containt-second">{product.topProducts}</spam>                    
                    <spam style={{fontSize:"13px"}} >{product.change1} change from today</spam>
                </div>
                <div class="row-two-card-header">     
                    <hr style={{width:"100%"}}></hr>            
                    <spam class="row-two-card-containt" >Support Cases</spam>
                    <spam class="row-two-card-containt-second"> {product.supports}</spam>
                    <spam style={{fontSize:"13px"}}>{product.change2} change from yesterday</spam>
                </div>
                <div className="card-footer-two">                
                <SimpleChart data={data} option={options}/>
                </div>                        
            </Card>
            <Card className="row-two-card">
                <div className="card-header-three">   
                    <div className="card-header-content-three">
                        <spam className="card-header-content-three-heading-iteam">{store.totalSales}</spam>
                        <spam className="card-header-content-three-heading">Top Sales</spam>                         
                    </div>            
                    <div className="card-header-content-three">
                        <spam className="card-header-content-three-heading-iteam" >{store.openCampage}</spam>   
                        <spam className="card-header-content-three-heading">Open Campaign</spam>                                        
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>                
                    <SimpleChart data={data2} option={options2}/>
                </div>
                <div className="card-header-three">
                    <div className="card-header-content-three" >
                        <spam className="card-header-content-three-heading-iteam">{store.storeSales}</spam>
                        <spam className="card-header-content-three-heading" >Online Sales</spam>
                    </div>                
                    <div className="card-header-content-three">
                    <spam className="card-header-content-three-heading-iteam">{store.totalSales}</spam>
                    <spam className="card-header-content-three-heading">Store Sales</spam>                                       
                    </div>
                    
                </div>
            </Card>
        </div>
    );
}

export default RowTwo


