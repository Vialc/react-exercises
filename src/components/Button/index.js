import React from 'react';

import './styles.css';

function Button({children, onClick}) {

  

  return <button type='submit' onClick={onClick} >{children}</button>;
}

export default Button;