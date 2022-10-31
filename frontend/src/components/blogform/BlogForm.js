import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './blogform.css';



export default function BlogForm() {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [error, setError] = React.useState(null);
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        const response = await fetch('api/blogs/', {
        method: 'POST', 
        body: JSON.stringify(blog),
        headers: {'Content-Type': 'application/json'}
        }
        )
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null);
            console.log('new blog added successfully');
            setTitle('');
            setBody('');
            setAuthor('');

        }
    }

      
    return (
      <Box
        component="form"
      
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className='blogform'
      >
   <Typography
            variant="h5"
            noWrap
            component="div"
            
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
          
            Write a new blog 
          </Typography>
<TextField id="outlined-basic" variant="outlined"  label="Blog Title"
          multiline
          maxRows={2}
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
   
        <TextField id="outlined-basic" variant="outlined"  label="Body"
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}/>

  <TextField id="outlined-basic" variant="outlined"  label="Written by"
          
          value={author}
          onChange={(e) => setAuthor(e.target.value)}/>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          {error && <div className='error'>{error}</div>}
      </Box>
    );
  }