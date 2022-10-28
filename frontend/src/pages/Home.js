import { useEffect, useState } from "react";

//components//
import BlogDetails from '../components/blogdetails/BlogDetails';

const Home = () => {
  // the java script logic goes first //
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };

    //fetchBlogs is the fxn argument in useEffect, so all the stuff above is just defining it. //
    // to look like useEffect(<function>, <dependency>), or in our case the function is fetchBlogs//
    fetchBlogs();
  }, []);

  // the component below //
  return (
    <div className="home">
      
      <div className="blogs">
    <h1>Welcome to the MERN Blog</h1>
        {/* //now we will map through all the blogs given as response.json // */}
        {/* // we will add javascript logic to the component  using single curlies // */}
        {blogs &&
          blogs.map((blog) => (
        // we passed in the key which we require and the blog as a prop, so we can access the props inside this component//
            <BlogDetails key={blog._id} blog={blog} />
            // because p needs a unique key in react (bc its a child i think)//
          ))}
      </div>
    </div>
  );
};
export default Home;
