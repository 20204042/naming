import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <title>메인 화면</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        <h1>메인 화면</h1>
        <Link to="/hangulname">
          <button>Hangul Name로 이동</button>
        </Link>
      </body>
    </div>
  );
}

export default MainPage;
