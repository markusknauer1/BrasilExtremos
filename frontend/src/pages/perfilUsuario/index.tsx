// SocialAction

import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";
import { Link } from "react-router-dom";

export function UserProfile() {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <h1 className="flex text-center justify-center">
          <strong>ÁREA DO ASSOCIADO</strong>
        </h1>
        {/* <h2>Você está na área de Ação Social do Moto Grupo Brasil Extremos</h2> */}
        {/* divisor */}
        <hr />
        <div className="flex flex-col w-full h-2/4 gap-4">
          <div className="flex flex-col ">
            <div className="headerProfile">
              <div className="indentity">
                <div>
                  <h2>Markus Knauer Alves Rasquinho</h2>
                  <h2>Knauer.kar2009@gmail.com</h2>
                  <h2>cod.: #43426</h2>
                </div>
                <div>
                  <label htmlFor="">Acesso liberado desde: 20/08/2020</label>
                </div>
              </div>
              <div className="imgPerfil">
                <img
                  src="../../../public/assets/imgs/perfil/perfilFacebook.jpg"
                  alt=""
                />{" "}
                <div className="imgPerfilBtns">
                  <Link
                    to="/pages/UserRegistration"
                    id="btnEditar"
                    className="absolute right-0"
                  >
                    Editar Perfil
                  </Link>
                  <Link to="/" id="btnSair" className="absolute right-0">
                    Sair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* divisor */}
        <hr />
        <div className="qdinteracao">
          <div className="qdinteracaoListas">
            <h2>Rifas ativas</h2>
            <div className="qdinteracaoItemsListas">
              <div className="itemComprado">
                <img
                  src="../../../public/assets/imgs/products/compras/kitGoPro.jpg"
                  alt=""
                />
                <h4>kit GoPro</h4>
                <p>Sorteio: 25/12</p>
              </div>
              <div className="itemComprado">
                <img
                  src="../../../public/assets/imgs/products/compras/capaceteRifa.webp"
                  alt=""
                />
                <h4>Capacete Adventure</h4>
                <p>Sorteio: 18/10</p>
              </div>
            </div>
          </div>
          <div className="qdinteracaoListas">
            <h2>Eventos agendados</h2>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/eventos/paraDeMotos2.jpeg"
                alt=""
              />
              <h4>Parada em santa catarina</h4>
              <p>Data do evento: 15/09</p>
            </div>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/eventos/moto-laguna-aerea-2.jpeg"
                alt=""
              />
              <h2>
                <strong>Feira de Artesanato</strong>
              </h2>
              <h4> em Florianopólis - SC</h4>
              <p>Data do evento: 15/09</p>
            </div>
          </div>
          <div className="qdinteracaoListas">
            <h2>Compras recentes</h2>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/products/boneMGBE.jpeg"
                alt=""
              />
              <h4>Bone MGBE</h4>
              <p>Aquisição: 20/07</p>
            </div>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/products/brasaobordadoMGBE.jpeg"
                alt=""
              />
              <h4>Brasão confeccionado MGBE</h4>
              <p>Aquisição: 18/02</p>
            </div>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/products/brasaobordadoMGBE.jpeg"
                alt=""
              />
              <h4>Brasão confeccionado MGBE</h4>
              <p>Aquisição: 18/02</p>
            </div>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/products/brasaobordadoMGBE.jpeg"
                alt=""
              />
              <h4>Brasão confeccionado MGBE</h4>
              <p>Aquisição: 18/02</p>
            </div>
            <div className="itemComprado">
              <img
                src="../../../public/assets/imgs/products/brasaobordadoMGBE.jpeg"
                alt=""
              />
              <h4>Brasão confeccionado MGBE</h4>
              <p>Aquisição: 18/02</p>
            </div>
          </div>
        </div>
      </QDConteudo>
    </div>
  );
}
