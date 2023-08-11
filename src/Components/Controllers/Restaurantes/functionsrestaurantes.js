//GET , POST, UPDATE,DELETE
import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetRestaurantes(){
    const  llamado_api= await axios.get(api+"api/restaurantes").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostRestaurantes(data){
  const  llamado_api=await axios.post(api+"api/restaurantes",data).then(res => {
        return res.data.data
      });
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}
