import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetMenu(){
    const  llamado_api= await axios.get(api+"api/menu").then(res => {
        return res.data.data
      });

     return  llamado_api;
}


export async function PostMenu(data){
  const  llamado_api=await axios.post(api+"api/menu",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}