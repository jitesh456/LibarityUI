import AxiosService from './AxiosService';


 class LibertyService{
    constructor(){
        this.AxiosService=new AxiosService();
    }
   

    menuInfo=(Data)=>{
        var url="http://localhost:3000/menuinfo";
        return this.AxiosService.get(url,false);
    }    
}

export default new LibertyService();