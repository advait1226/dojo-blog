import { Link } from "react-router-dom";
import { useState } from "react";

const BlogList = (props) => {
    const [blogs, setBlogs] = useState(props.blogs);
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }
    return(
        <div className="blog-list">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                        <button onClick={()=>{
                            handleDelete(blog.id);
                        }}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;