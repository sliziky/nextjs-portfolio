import Head  from "next/head"
import { Component } from 'react'
// import { attributes, react as HomeContent } from '../content/home.md';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "../components/Navigation";
export const Home : React.FC = () => {
  // let { title, cats } = attributes;
  // console.log(title, cats);
  return (
    <>
    <Navigation></Navigation>
    <p className={`text`}>Hello</p>
      {/* <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article> */}
    </>
  )
}
export default Home;