import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetProductos(){
    const  llamado_api= await axios.get(api+"api/producto").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostProductos(data){
  const  llamado_api=await axios.post(api+"api/producto",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}