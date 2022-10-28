import { useEffect, useState } from "react";

const Home = () => {
  // the java script logic goes first //
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("https:/localhost:4000/api/blogs");
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
      <h1>All Blog Posts</h1>
      <div className="blogs">
        {/* //now we will map through all the blogs given as response.json // */}
        {/* // we will add javascript logic to the component  using single curlies // */}
        {blogs &&
          blogs.map((blog) => (
            <p key={blog._id}>{blog.title}</p>
            // because p needs a unique key in react (bc its a child i think)//
          ))}
      </div>
    </div>
  );
};
export default Home;
