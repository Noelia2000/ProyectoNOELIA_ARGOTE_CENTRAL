import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, seTcategories] = useState(['dragon ballZ', 'One Punch', 'Sailor Moon']);

    const onAddCategory = (newCategory) => {


        if (categories.includes(newCategory)) return;


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

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }


            {/* git item */}
        </>

    )
}
