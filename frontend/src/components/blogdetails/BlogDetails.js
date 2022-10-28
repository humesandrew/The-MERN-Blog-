


import './blogdetails.css';

const BlogDetails = ({ blog }) => {

// here we are destructing from the props the props that we pass thru (the blog object, which has title, id, load, etc)//

return(
<div className="blogDetails">
    <h1>{blog.title}</h1>
    <p><strong>Load (lbs): </strong>{blog.load}</p>
    <p><strong>Reps: </strong>{blog.load}</p>
    <p>{blog.createdAt}</p>
</div>

)

}

export default BlogDetails