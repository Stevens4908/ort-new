import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetPedidos(){
    const  llamado_api= await axios.get(api+"api/pedido").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostPedidos(data){
  const  llamado_api=await axios.post(api+"api/pedido",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}