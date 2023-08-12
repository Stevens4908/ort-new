import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetCliente(){
    const  llamado_api= await axios.get(api+"api/cliente").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostCliente(data){
  const  llamado_api=await axios.post(api+"api/cliente",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}