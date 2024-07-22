import ListPosts from "../components/ListPosts"
import ListCategories from "../components/ListCategories"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories/>
      {/*Se está pasando una prop llamada url al componente ListPosts.
      Dentro del componente ListPosts, puedes acceder al valor "/posts" a través de la prop url.
      Solo se pone /posts debido a que en api,js se esta usando baseURL*/}
      <ListPosts url={"/posts"}/>
    </main>
  )
}

export default Home
