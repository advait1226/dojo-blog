import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} />}
            {loading && <p id="loading">Loading...</p>}
        </div>
    );
}

export default Home;