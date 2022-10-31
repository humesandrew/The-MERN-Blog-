import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './blogform.css';


export default function BlogForm() {
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

      
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
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
          value={value}
          onChange={handleChange}/>
   
        <TextField id="outlined-basic" variant="outlined"  label="Body"
          multiline
          rows={4}
          value={value}
          onChange={handleChange}/>

  <TextField id="outlined-basic" variant="outlined"  label="Written by"
          
          value={value}
          onChange={handleChange}/>
          <Button variant="contained">Submit</Button>
      </Box>
    );
  }