import { useState, useEffect } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";

const Categoria = () => {

    //Extrae el parámetro id de la URL usando useParams. Este parámetro se utilizará para filtrar los posts por categoría.
    const {id} = useParams()

    const [subcategorias, setSubcategorias] = useState([])

    //useResolvedPath es un hook que se usa para obtener una ruta resuelta en función de la ubicación actual.
    const url = useResolvedPath("").pathname
    console.log(url)

    useEffect(() => {
        //buscar está enviando una solicitud a la API para obtener información sobre categorías basándose en el id proporcionado
        //Cuando la solicitud termina, se recibe una respuesta. Esta respuesta contiene una lista de categorías, y de esas categorías, se extraen las subcategorías.
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias)
        })
    }, [id]) //Se ejecutara cada vez que se cambie el id

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategories/>

            <ul className="category-list container flex">
                {
                    //Utiliza la función map para recorrer el array subcategorias y crear un elemento para cada subcategoría.
                    subcategorias.map(subcategoria => (
                        /* CSS dinámicas que dependen del valor de id y asigna una clave única basada en el nombre de la subcategoría. 
                        Esto ayuda a aplicar estilos específicos y a optimizar la actualización de la lista en React*/
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            {/*que crea un enlace a una ruta que se forma combinando url y subcategoria.*/}
                            <Link to={`${url}/${subcategoria}`}>
                            {/*se muestra el nombre de la subcategoría.*/}
                            {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            
            {/*Usamos rutas anidadas*/}
            <Routes>
                {/*El componente ListPosts, que lista los posts filtrados por la categoría especificada por el id en la URL. 
            La URL de la API para obtener los posts se construye dinámicamente usando el id.*/}
                <Route path="/" element= {<ListPosts url={`/posts?categoria=${id}`}/>}/>
            </Routes>
        </>
    )
}

export default Categoria