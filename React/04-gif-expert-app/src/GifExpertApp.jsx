import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
  
    const [categories, seTcategories] = useState(['One Punch', ' dragon ballZ']);

    const onAddCategory=()=>{

        // categories.push('Valorant');
       seTcategories(['Valorant',...categories]);
    //    seTcategories(cat =>[...cat,'Valorant']);


    }
   
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory/>
        


        {/* listado de Gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
          categories.map(category => {
            return<li key={category}>{category}</li>
          })
          }
        </ol>

        {/* git item */}
    </>
    
  )
}
