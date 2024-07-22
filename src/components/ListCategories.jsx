import  {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { buscar } from '../api/api'
import "../assets/css/blog.css"

const ListCategories = () => {

     // Declaración del estado 'categories' y su función para actualizarlo 'setCategories'
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        //// Llama a la función 'buscar' para obtener datos de las categorías y actualiza el estado
        buscar(`/categorias`, setCategories)
    }, []) // El array vacío significa que este efecto solo se ejecutará una vez, al montar el componente

    return (
        <ul className='category-list container flex'>
            {
                //// Mapea sobre las categorías obtenidas y genera un enlace para cada una
                categories.map(category => (
                    // Enlace a la ruta de la categoría específica
                    <Link to={`/categoria/${category.id}`} key={categories}>
                        {/* // category-list__category--${categoria} modifica el comportamiento de la categoria, si la categoria es roja o azul*/}
                        <li className={`category-list__category category-list__category--${category.id}`}>
                            {/* Muestra el nombre de la categoría */}
                            {category.nombre}
                        </li>
                    </Link>
                    
                ))
            }
        </ul>
    )
}

export default ListCategories