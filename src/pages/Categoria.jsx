import { useState, useEffect } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import { useParams, Routes, Route } from "react-router-dom";

const Categoria = () => {

    //Extrae el parámetro id de la URL usando useParams. Este parámetro se utilizará para filtrar los posts por categoría.
    const {id} = useParams()

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategories/>
            
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