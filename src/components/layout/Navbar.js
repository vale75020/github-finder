import React from 'react';
import PropTypes from 'prop-types' // impt + enter
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
  return (
    <div>
      <div className="navbar bg-primary">
         <h1>
           <i className={icon} />
           {title}
         </h1>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/about'>About</Link>
           </li>
         </ul>
       </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;




// import React, { Component } from "react";
// import PropTypes from 'prop-types' // impt + enter

// // rce class component with export at the end
// export class Navbar extends Component {
  // static defaultProps = {
  //   title: "Github Finder",
  //   icon: "fab fa-github"
  // };

  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired
  // };

//   render() {
//     return (
//       <div className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon} />
//           {this.props.title}
//         </h1>
//       </div>
//     );
//   }
// }

// export default Navbar;
