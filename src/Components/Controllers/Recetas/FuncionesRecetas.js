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
export async function UpdateReceta(id_actulizar,datos){
  const  llamado_api=await axios.post(api+"api/updatereceta/"+id_actulizar,datos).then(res => {
    console.log(res.data);
           return res.data.data
         });
     
         return  llamado_api;
}
export function DeleteRestaurante(){

}