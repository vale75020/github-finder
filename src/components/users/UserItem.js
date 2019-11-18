import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UserItem = ({user: { avatar_url, login, html_url } })=> {
  //const { avatar_url, login, html_url } = props.user;
  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, // ptor + tab
}

export default UserItem;


// import React, { Component } from "react";

// export class UserItem extends Component {

//   render() {
//       const {avatar_url, login, html_url} = this.props.user
//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           alt=""
//           className="round-img"
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>
//         <a href={html_url} className="btn btn-dark btn-sm my-1">
//           More
//         </a>
//       </div>
//     );
//   }
// }

// export default UserItem;
