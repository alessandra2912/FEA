import React from "react";
import assai from "./Assets/assai.png";
import carrefour from "./Assets/Carrefour.jpg";
import sam from "./Assets/sam.png";
import atacadao from "./Assets/atacadao.jpg";
import redemix from "./Assets/redemix.jpg";
import hiperideal from "./Assets/hiperieal.jpg";
import "./Parceiro.css";

const Parceiros = () => {
    const mercados = [
      {
        image: assai,
        title: "Assai",
        text: <div className="aa"><p>O FEA trabalha para redistribuir alimentos excedentes para comunidades carentes. 
        Isso contribui para a redução da fome e para o uso mais eficiente dos recursos alimentares. 
        Trabalhamos para um mundo onde cada refeição importa.</p></div>,
      },
      {
        image: carrefour,
        title: "carrefour",
        text: <div className="aa"><p>O FEA trabalha para redistribuir alimentos excedentes para comunidades carentes. 
        Isso contribui para a redução da fome e para o uso mais eficiente dos recursos alimentares. 
        Trabalhamos para um mundo onde cada refeição importa.</p></div>,
      },
      {
        image: sam,
        title: "Sams",
        text: <div className="aa">O FEA tem parcerias com produtores e varejistas para coletar alimentos excedentes.
        Esses alimentos são redistribuídos para comunidades carentes. 
        Além disso, compras em supermercados parceiros recebem descontos especiais. 
        Junte-se a nós e faça a diferença!</div>,
      },
      {
        image: atacadao,
        title: "Atacadão",
        text: <div className="aa">O FEA tem parcerias com produtores e varejistas para coletar alimentos excedentes.
        Esses alimentos são redistribuídos para comunidades carentes. 
        Além disso, compras em supermercados parceiros recebem descontos especiais. 
        Junte-se a nós e faça a diferença!</div>,
      },
      {
        image: redemix,
        title: "Redemix",
        text: <div className="aa">O FEA tem parcerias com produtores e varejistas para coletar alimentos excedentes.
        Esses alimentos são redistribuídos para comunidades carentes. 
        Além disso, compras em supermercados parceiros recebem descontos especiais. 
        Junte-se a nós e faça a diferença!</div>,
      },
      {
        image: hiperideal,
        title: "Hiperideal",
        text: <div className="aa">O FEA tem parcerias com produtores e varejistas para coletar alimentos excedentes.
        Esses alimentos são redistribuídos para comunidades carentes. 
        Além disso, compras em supermercados parceiros recebem descontos especiais. 
        Junte-se a nós e faça a diferença!</div>,
      },
    ]
    return (
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <h1 className="texto">Nossos Parceiros</h1> 
          </div> 
          <div className="work-section-bottom">
            {mercados.map((data) => (
              <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

    export default Parceiros
