import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts";

const SubCategoria = () => {

    // useParams es un hook de React Router que se utiliza para acceder a los parámetros de la URL
    const {subcategoria} = useParams()
    return (
        // Accedemos a la url a traves de una subcategoria
        <ListPosts url={`/posts?subcategoria=${subcategoria}`}/>
    )
}

export default SubCategoria