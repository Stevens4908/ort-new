import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetMesas(){
    const  llamado_api= await axios.get(api+"api/mesa").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostMesas(data){
  const  llamado_api=await axios.post(api+"api/mesa",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}