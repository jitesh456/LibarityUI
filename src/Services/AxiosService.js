  
import axios from 'axios';

export default function AxiosService(){

}


AxiosService.prototype.get=function(url,isHeader=false,Header){
    return axios.get(url,isHeader && Header)
}

