import AxiosService from './AxiosService';
 const baseUrl="http://localhost:3000";

 class LibertyService{
    constructor(){
        this.AxiosService=new AxiosService();
    }
   

    menuInfo=()=>{
        var url=baseUrl.concat("/menuinfo");
        return this.AxiosService.get(url,false);
    }
    profile=()=>{
        var url=baseUrl.concat("/profile");
        return this.AxiosService.get(url,false);
    } 
    product=()=>{
        var url=baseUrl.concat("/product");
        return this.AxiosService.get(url,false);
    } 
    support=()=>{
        var url=baseUrl.concat("/support");
        return this.AxiosService.get(url,false);
    }
    sales=()=>{
        var url=baseUrl.concat("/sales");
        return this.AxiosService.get(url,false);
    }
    salesInfo=()=>{
        var url=baseUrl.concat("/salesInfo");
        return this.AxiosService.get(url,false);
    }
    getTableData=()=>{
        var url=baseUrl.concat("/tableData");
        return this.AxiosService.get(url,false);
    }    
}

export default new LibertyService();