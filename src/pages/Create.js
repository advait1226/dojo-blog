const Create = () => {
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type={"text"}
                    required
                />
                <label>Blog body:</label>
                <textarea
                    required
                ></textarea>
                <label>Blog author:</label>
                <select>
                    <option value={"Mario"}>Mario</option>
                    <option value={"Luigi"}>Luigi</option>
                </select>
                <button>
                    Post
                </button>
            </form>
        </div>
    );
}
 
export default Create;