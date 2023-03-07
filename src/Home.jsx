
import BlogList from './BlogList'
import useFetch from './UseFetch'

const Home = () => {
const {data, isloading, error} =useFetch('http://localhost:8000/blogs')


//skapar ny array som filtreras och sparas i newBlogs, raderar en i taget genom id

//mappar/visar igenom alla bloggar, med key property
//lägg in vilka props du vill skicka till förälder i <BlogList/> som är child
//filter tar bort alla bloggar som inte är Lizzy
//{blogs && visar det som är sant , och här är blogs null}
  return (
    <div className='home'>
      {error &&  <div>{error}</div>}
      {isloading &&  <div>Loading...</div>}
      {data && <BlogList  blogs={data} title='All Blogs!' />}
      {data && <BlogList  blogs={data.filter((blog)=> blog.author === 'Lizzy')} title='Lizzys Blogs!'/>}
       
    </div>
  )
}

export default Home

//starta server   npx json-server --watch data/db.json --port 8000