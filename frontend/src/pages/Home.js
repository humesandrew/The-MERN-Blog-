import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

//components//
import BlogDetails from '../components/blogdetails/BlogDetails';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
    <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={2}>
         <Grid item xs={3}>
          <Item>This will be add blog
        
          </Item>
          </Grid>
        {/* //now we will map through all the blogs given as response.json // */}
        {/* // we will add javascript logic to the component  using single curlies // */}
       
         <Grid item xs={9}>
          <Item>
        
        
       
        {blogs &&
          blogs.map((blog) => (
        // we passed in the key which we require and the blog as a prop, so we can access the props inside this component//
            <BlogDetails key={blog._id} blog={blog} />
            // because p needs a unique key in react (bc its a child i think)//
          ))}
         
         </Item>
          </Grid>
     
          </Grid>
          </Box>
      </div>
     
    </div>
  );
};
export default Home;
