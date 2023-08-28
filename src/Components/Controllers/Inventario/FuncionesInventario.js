import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetInventario(){
    const  llamado_api= await axios.get(api+"api/inventario").then(res => {
        return res.data.data
      });

     return  llamado_api;
}

export  async function GetInventarioLabel(){
  const  llamado_api= await axios.get(api+"api/inventario_label").then(res => {
      return res.data.data
    });

   return  llamado_api;
}

export async function PostInventario(data){
  const  llamado_api=await axios.post(api+"api/inventario",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}

