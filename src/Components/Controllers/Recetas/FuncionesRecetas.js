import axios from 'axios';
import { api } from '../../utils/url_api';


export  async function GetReceta(){
    const  llamado_api= await axios.get(api+"api/receta").then(res => {
        return res.data.data
      });

     return  llamado_api;
}
export async function PostReceta(data){
  const  llamado_api=await axios.post(api+"api/receta",data).then(res => {
 console.log(res.data);
        return res.data.data
      });
  
      return  llamado_api;
}
export function UpdateRestaurante(){

}
export function DeleteRestaurante(){

}