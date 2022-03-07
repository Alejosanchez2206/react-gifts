import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categoria, setcategoria] = useState(['Dragon Ball'])
    
   
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
             setcategoria = {setcategoria}
            />
            <hr />
           
            <ol>
                {categoria.map(item =>{
                    return(
                    <GifGrid
                     key={item}
                     category={item}
                    />
                    )
                })
                }
            </ol>
        </>
    )

}