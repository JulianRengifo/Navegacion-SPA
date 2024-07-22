import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

//importamos useParams para obtener el identificador de la url

const Post = ({url}) => {

    //Usamos useState para poder definir la informacion del post
    //establece el estado inicial post como un objeto vacío.
    const [post, setPosts] = useState({})

    //destructuramos id extrayendo el valor del parámetro id de un objeto que useParams devuelve.
    //obtenemos parámetros de la URL en un componente de React utilizando React Router
    //useParams es un hook proporcionado por React Router.Se utiliza para acceder a los parámetros de la URL en un componente funcional de React.
    const {id} = useParams()

    const navigate = useNavigate()

    /*muestra los detalles de un post basado en el id de la URL, cada vez que el id cambie 
    (cuando navegas a un post diferente), se realizará una nueva solicitud para obtener los datos del nuevo post.
    Usamos catch para manejar erorres durante la busqueda de datos redirigiendo a la pagina error 404*/
    useEffect(() => {
        buscar(`/posts/${id}`, setPosts).catch(() => {
            //Con ayuda de useNavigate redirige a la pagina error 404
            navigate("/not-found")
        })
    }, [id])

    return(
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post