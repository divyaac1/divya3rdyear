// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import { Fab } from '@mui/material';



// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

// const Footer = () => {
//   return (
//     <React.Fragment>
     
      
//       <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
//         <Toolbar>
          
          
//           <Box sx={{ flexGrow: 1 }} />
          
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }
// export default Footer;
import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976D2',
    color: 'white',
    textAlign: 'center',
  };

  const iconStyle = {
    color: 'white',
    marginRight: '10px',
  };

  return (
    <div style={footerStyle}>
      <IconButton color="inherit" aria-label="Facebook" href="https://www.facebook.com">
        <FacebookIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="Twitter" href="https://www.twitter.com">
        <TwitterIcon style={iconStyle} />
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram" href="https://www.Instagram.com">
        <InstagramIcon style={iconStyle} />
        </IconButton>
    </div>
  );
}

export default Footer;