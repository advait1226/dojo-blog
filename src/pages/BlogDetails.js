import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, loading} = useFetch("http://localhost:8000/blogs/"+id);
    return(
        <div className="blog-details">
            {error && <div>{error}</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <h3>Likes: {blog.likes}</h3>
            </article>)}
            {loading && <p id="loading">Loading...</p>}
        </div>
    );
}
 
export default BlogDetails;