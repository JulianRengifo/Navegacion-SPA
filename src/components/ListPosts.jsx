import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"

// recibimos la url
const ListPosts = ({url}) => {
    
    //useState es un hook de React que permite agregar estado a un componente funcional.
    //Se declara una variable de estado llamada post y una función para actualizarla llamada setPosts.
    //El estado inicial de post es un array vacío [].
    const [posts, setPosts] = useState ([])

    /*useEffect es otro hook de React que se usa para manejar efectos secundarios en componentes funcionales.
    Este hook se ejecuta después de que el componente se renderiza por primera vez y cada vez que cambia 
    una de las dependencias especificadas en el array de dependencias (en este caso, url).
    Se usa useEffect para buscar la informacion*/
    useEffect(() => {
        //hace una solicitud a la API para obtener datos y luego actualiza el estado post utilizando setPosts
        buscar(url, setPosts)
    }, [url]) // Cada vez que cambie la url se ejecute esta funcion

    return(
        <section className="posts container">
            {
                // Tenemos un arrglo y usamos map para recorrelo uno por uno
                posts.map(post => {
                    // Destructuramos cada post obteniendo id, title...
                    const {id, title, metadescription, body, categoria} = post;
                    // /posts/${id}` nos agrega un identificador a cada posts y que al seleccionar una card nos muestre el detalle de esa card
                    // post-card--${categoria} modifica el comportamiento de la categoria, si la card es roja o azul
                    // La propiedad key es necesaria en listas generadas dinámicamente para ayudar a React a identificar y gestionar cada elemento de manera eficiente.
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article className="card">
                            <h3 className="post-card__title">
                                {/*muestra el título del post*/}
                                {title}
                            </h3>
                            <p className="post-card__body">
                                {body}
                            </p>
                            <a className="post-card__meta">
                                {/*muestra la metadescripción del post*/}
                                {metadescription}
                                </a>
                        </article>
                    </Link>
                })
            }
        </section>
    )
}

export default ListPosts