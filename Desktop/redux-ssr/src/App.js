import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  const [title] = useState('react-ssr-標題')
  return (
    <Fragment>
      <div className="App">
        <Helmet>
            <title>{`${title}`}</title>
            <meta name="description" content="SSR-描述" />
            <meta property="og:title" content="OG:標題" />
            <meta property="og:description" content="OG:描述" />
            <meta property="og:url" content="OG:網址" />
            <meta property="og:image" content="OG:圖片" />
            <meta itemProp="name" content="產品名稱" />
            <meta itemProp="description" content="產品描述" />
            <meta itemProp="image" content="產品圖片" />
            {/* <meta property="fb:app_id" content="1692681850967543" /> */}
            {/* <link rel="canonical" href={`${app.siteUrl}product/${product.prodNo}`} /> */}
            {/* <link rel="author" href="https://plus.google.com/103719721831316369301" /> */}
            {/* <link rel="publisher" href="https://plus.google.com/103719721831316369301" /> */}
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>2019/11/27 react server side render</p>
        </header>
      </div>
    </Fragment>
  );
}

export default App;

