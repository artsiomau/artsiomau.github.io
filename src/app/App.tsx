import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! I’m Sergey. I’m working toward becoming a Full-Stack Developer because I
          really like building things end to end — not only the backend logic, but also
          the UI people actually interact with.
          <br />
          <br />
          I’ve been in software development for almost 7 years. I’ve worked on different
          products and teams (including European companies), and on a few projects I
          took the lead role — helping with technical decisions and supporting the team
          day to day.
          <br />
          <br />
          Most of my experience is on the backend: Java (8/11/17/21), Kotlin, Groovy
          (and a bit of Scala), Spring (Boot/Data/MVC/Cloud), Hibernate/JPA, and API work
          (REST/SOAP/gRPC/GraphQL). I’ve also used Kafka and a typical DevOps stack like
          Docker/Kubernetes, Jenkins, AWS, and Keycloak. For databases, I’ve worked with
          PostgreSQL, MySQL, Oracle, MongoDB, and Redis.
          <br />
          <br />
          On the frontend I’ve worked with Angular and Vue, and now I’m focusing more
          on React to get stronger across the full stack.
          <br />
          <br />
          English: Upper-Intermediate.
          <br />
          <br />
          GitHub:{' '}
          <a href="https://github.com/artsiomau" target="_blank" rel="noreferrer">
            github.com/artsiomau
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
