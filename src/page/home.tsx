import { useEffect, useState } from "react";

import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Piston from "../assets/images/piston.png";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";
import Carousel from "../components/carousel.tsx";
import Footer from "../components/footer.tsx";
import Contact from "../components/contact.tsx";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/utility.css";
import "../styles/gallery.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const toggleBodyOverflow = (isMenuOpen: boolean) => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyOverflow(showMobileMenu);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Mecanica" width={150} height={150} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solutions">Soluções</a>
              </li>
              <li>
                <a href="#gallery">Galeria</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Galeria</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Olá</p>
          <h1>Precisando de serviços automotivos?</h1>
          <p>
            Encontre os melhores serviços automotivos na Mecânica Automotiva
            Xavier, consolidados no mercado com atendimento de diversas áreas do
            setor automotivo, confira a baixo alguns de nossos serviços.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      
      <section id="solutions" className="container py-lg">
        <h2 className="section-title">Alguns de nossos serviços</h2>
        <p className="section-description">
          Descubra como nossos serviços especializados podem ajudar a prolongar
          a vida útil do seu veículo através de uma manutenção preventiva
          completa. Oferecemos uma análise detalhada de cada componente do seu
          automóvel, identificando possíveis problemas antes que eles se tornem
          falhas maiores.
        </p>
        <div className="solutions-grid">
          <div className="solution-card">
            <img src={Piston} alt="Troca de Óleo" className="piston-logo" />
            <h3>Troca de Óleo</h3>
            <p>
              Realização da troca preventiva do óleo do seu automovel, garantido
              a durabilidade e sáude do motor.
            </p>
          </div>
          <div className="solution-card">
            <img
              src={Piston}
              alt="Alinhamento e Balançeamento"
              className="piston-logo"
            />
            <h3>Alinhamento e Balançeamento</h3>
            <p>
              O balanceamento do automóvel garante que as rodas girem sem
              vibrações. E o alinhamento serve para ajustar os ângulos das
              rodas, ajudando á economizar combustível.
            </p>
          </div>
          <div className="solution-card">
            <img
              src={Piston}
              alt="Manutenções em Gerais"
              className="piston-logo"
            />
            <h3>Manutenções em Gerais</h3>
            <p>
              Manuntenções em geral, desde retifica de motores até manutenção
              preventiva como troca de pastilhas de freio, óleo, filtro e entre
              outros.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="container py-lg">
        <h2 className="section-title">Galeria da Mecânica</h2>
        <p className="section-description">
          Confira algumas imagens da nossa oficina e veja como trabalhamos com
          dedicação para cuidar do seu veículo.
        </p>
        <Carousel />
      </section>

      <section id="pricing" className=" container py-lg pricing-section">
        <div className="pricing-card">
          <h3>Troca de Óleo</h3>
          <h2>R$ 150,00</h2>
          <p>Serviço completo de troca de óleo com verificação de filtros.</p>
        </div>
        <div className="pricing-card highlighted">
          <div className="promo-header">Promoção</div>
          <h3>Alinhamento</h3>
          <h2>R$ 200,00</h2>
          <p>Alinhamento de rodas para garantir a segurança e eficiência do veículo.</p>
        </div>
        <div className="pricing-card">
          <h3>Manutenção Preventiva</h3>
          <h2>R$ 300,00</h2>
          <p>Verificação completa do veículo para prevenir problemas futuros.</p>
        </div>
      </section>

      {/* <section id="contact" className="contact-section section-spacing">
        <p className="contact-intro">Envie sua dúvida</p>
        <h2>Envie sua dúvida</h2>
        <h3>Envie sua dúvida e teremos o prazer de responder ela, estamos a disposição.</h3>
        <input type="email" placeholder="Seu Melhor E-mail" />
        <input type="text" placeholder="Motivo do contato. Ex gostaria de saber se tem desconto." />
        <Button text="Envie seu e-mail" />
      </section>   */}

      <Contact />

      <Footer />

    </>
  );
}
