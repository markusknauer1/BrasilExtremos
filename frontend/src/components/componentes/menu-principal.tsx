import { useState } from "react";
import { Link } from "react-router-dom";

export function DefaultMenu() {
  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false);

  function openMenu() {
    setIsMenuButtonOpen(true);
  }
  function closeMenu() {
    setIsMenuButtonOpen(false);
  }

  return (
    <div className="cdMenuPrincipal">
      <img
        src="/assets/imgs/android-chrome-192x192.png"
        className="flex fixed z-50 min-w-[80px] max-w-[8%]  left-2 top-2"
        alt=""
      />
      {isMenuButtonOpen ? (
        <button className="buttonMenuOpen" onClick={closeMenu}></button>
      ) : (
        <button className="buttonMenuOpen" onClick={openMenu}></button>
      )}

      {isMenuButtonOpen ? (
        <div className="fixed top-0 h-[40px]">
          <div className="displayNoneDisplay"></div>
          <div className="menuPrincipal">
            <Link to="/" className="transitionEase">
              Home
            </Link>
            <Link to="/pages/SocialAction" className="transitionEase">
              Ação Social
            </Link>
            <Link to="/pages/Market" className="transitionEase">
              Loja
            </Link>
            <Link to="/pages/Associates" className="transitionEase">
              Associados
            </Link>
            <Link to="/pages/Schedule" className="transitionEase">
              Agenda
            </Link>
            <Link to="/pages/ContactUs" className="transitionEase">
              Fale Conosco
            </Link>
            <Link to="/pages/Acess" className="transitionEase">
              Área do Associado
            </Link>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 h-[40px]">
          <div className="displayNoneDisplay"></div>
          <div className="menuPrincipalo"></div>
        </div>
      )}
      <div className="menuPrincipalDesktop shadow-shape">
        <Link to="/" className="transitionEase">
          Home
        </Link>
        <Link to="/pages/SocialAction" className="transitionEase">
          Ação Social
        </Link>
        <Link to="/pages/Market" className="transitionEase">
          Loja
        </Link>
        <Link to="/pages/Associates" className="transitionEase">
          Associados
        </Link>
        <Link to="/pages/Schedule" className="transitionEase">
          Agenda
        </Link>
        <Link to="/pages/ContactUs" className="transitionEase">
          Fale Conosco
        </Link>
        <Link to="/pages/Acess" className="transitionEase">
          Área do Associado
        </Link>
      </div>
    </div>
  );
}
