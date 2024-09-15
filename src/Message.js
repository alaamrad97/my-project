import React from 'react';

function Message({ user }) {
  return (
    <div className="message">
      <h3>Hello {user}</h3>
          <p>This is a page that welcomes a user.</p>
          <h2> Test</h2>
      <h1> Changes are here </h1>
    </div>
  );
}

export default Message;
