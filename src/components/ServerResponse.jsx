import React from 'react';

function ServerResponse(props) {
  return (
    <div>
      <div>Server Response:</div>
      <div>
        <p>{props.response}</p>
      </div>
    </div>
  )
}

export default ServerResponse