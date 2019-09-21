import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Message(props){
return(
    <li>
    <img src={props.imgURL}/>
     <div className="column"><h4>{props.name}</h4>
     <p>{props.number}</p>
     <p>{props.message}</p>
     <p className="time">{props.time}</p>
     </div>
     <p className="unread">{props.numbUnread}</p>
  </li>
)
}

Message.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    time: PropTypes.string,
    message: PropTypes.string,
    imgURL: PropTypes.string,
    numbUnread: PropTypes.number,
}

export default Message