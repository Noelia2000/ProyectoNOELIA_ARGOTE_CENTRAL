import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, seTcategories] = useState(['One Punch', ' dragon ballZ']);

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);
        seTcategories([newCategory, ...categories]);
        //    seTcategories(cat =>[...cat,'Valorant']);


    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory

                // seTcategories={seTcategories}
                //?Evento
                onNewCategory={(value) => onAddCategory(value)}
            />



            {/* listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

            {/* git item */}
        </>

    )
}
