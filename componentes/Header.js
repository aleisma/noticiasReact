import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
     return (
          <nav>
               <div className="nav-wrapper grey darken-3">
                    <a className="brand-logo center">{props.titulo}</a>
               </div>
          </nav>
     );
};

Header.propTypes = {
     titulo: PropTypes.string.isRequired
}

export default Header;