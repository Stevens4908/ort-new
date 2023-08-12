import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetEmpleado(){
    const  llamado_api= await axios.get(api+"api/empleado").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostEmpleado(data){
  const  llamado_api=await axios.post(api+"api/empleado",data).then(res => {
 
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}