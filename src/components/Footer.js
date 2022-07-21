import React from 'react';

function Footer() {
  const year = new Date();
  return ( 
    <React.Fragment>
      <footer>
        <p>&copy; {year.getFullYear()} 610Music. All Rights Reserved</p>
      </footer>
    </React.Fragment>
   );
}

export default Footer;