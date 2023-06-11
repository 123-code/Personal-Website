import * as React from 'react';
import Navbar from './Components/Navbar'
import { FaGithub, FaTwitter, FaFilePdf } from 'react-icons/fa';
import './style.css';

export default function App() {
  return (
    <div className="container" style={{ backgroundColor:'#212121'}}>
      <h1>Jose Ignacio Naranjo</h1>
      <div className="icon-container">
          <FaGithub className="icon" />
          <FaTwitter className="icon" />
          <FaFilePdf className="icon" />
        </div>
      <p style={{color:'#39FF14' }}> Learning:  React,Solidity & Pytorch</p>
      <ul>
          <li>Sobre Mi</li>
          <li>Proyectos</li>
          <li>Cursos</li>
          <img
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-979490d2-ba34-417a-9fcb-af7eaa8d20fa.jpg"
          className="small-image"
          alt="Certificate"
        />

        </ul>
    </div>
  );
}
