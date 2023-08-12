import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetFacturaciones(){
    const  llamado_api= await axios.get(api+"api/factura").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostFacturaciones(data){
  const  llamado_api=await axios.post(api+"api/factura",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}