import axios from "axios";

// axios es una biblioteca popular para hacer solicitudes HTTP en JavaScript.

// Creamos una Instancia de Axios 
// axios.create crea una instancia de Axios con una configuración personalizada
export const api = axios.create({
    //especifica la URL base para todas las solicitudes realizadas con esta instancia de Axios. En este caso, es "http://localhost:5000".
    baseURL: "http://localhost:5000"
})

// Creamos una Función Asíncrona para Buscar Datos
// url: La parte específica del endpoint que se añade a baseURL
// setData: Una función para actualizar el estado
export const buscar = async (url, setData) => {
    // api.get(url) realiza una solicitud HTTP GET a http://localhost:5000/url
    // await espera a que la solicitud se complete y almacena la respuesta en la variable respuesta
    const respuesta = await api.get(url)
    // Actualizamos el estado
    // respuesta.data contiene los datos obtenidos de la respuesta HTTP
    // setData(respuesta.data) actualiza el estado con los datos obtenidos, usando la función pasada como argumento setData
    setData(respuesta.data)
}