import { useState } from "react";
import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";
import { CardProduct } from "../../components/modularização/cardProduct";
import { LoginModal } from "../../components/modularização/loginAcess";

export function Market() {
  const [isAcessMarket, setIsAcessMarket] = useState(false);

  function openLoginLoja() {
    setIsAcessMarket(true);
  }
  function closeLoginLoja() {
    setIsAcessMarket(false);
  }
  function handleFirstAccess() {
    const email = (
      document.querySelector('input[name="Email"]') as HTMLInputElement
    ).value;
    localStorage.setItem("contactFormEmail", email);
    window.location.href = "/pages/ContactUs";
  }
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <img
          src="../public/assets/imgs/imgShop\20211023_111701.jpg"
          className="flex h-2/4 w-full justify-center bg-zinc-800"
          alt=""
        />
        <div className="headerMarket">
          <h1 className="flex w-[80%] gap-2 text-[1.5rem]">
            PRODUTOS MARCA <strong>MG BRASIL EXTREMOS</strong>
          </h1>
          <div className="flex ">
            <button className="headerMarketButton">Faça login</button>
            <div className="headerMarketDiv flex-col">
              <div className="flex gap-4 ">
                <button>
                  <img
                    src="../../../public/assets/imgs/icons/carrinho-de-compras.png"
                    alt="Market"
                    className="size-4"
                  />
                </button>
                <span>0</span>
              </div>
              <p className="text-[10px]">MARKET</p>
            </div>
          </div>
        </div>
        {/* divisor */}
        <hr />
        <div className="MarketInfo">
          <h2>* ATENÇÃO: CARO ASSOCIADO E AMIGO *</h2>
          <ul>
            <li>
              - Nesse primeiro momento estamos encaminhando para produção quando
              acumula 10 itens do mesmo produto em todos os pedidos.
            </li>
            <li>
              - Você receberá atualizações do seu pedido por email e pode
              acompanhar o status pelo site.
            </li>
            <li>
              - Prazo médio para envio de até 10 dias, após pedido de produção,
              custo de envio será passado após a produção.
            </li>
            <li>
              - Inicialmente estamos recebendo pagamentos via PIX. Encaminhe os
              comprovantes por Email, Whatsapp ou faça o Upload no seu pedido.
            </li>
            <li>
              - O SITE ESTÁ RECEBENDO MELHORIAS, EM BREVE SERÁ POSSIVEL CALCULO
              DE FRETE E OUTRAS FORMAS DE PAGTO.
            </li>
          </ul>
        </div>
        {/* divisor */}
        <hr />
        <div className="w-[100%] flex gap-4">
          <h2>PRODUTOS DISPONIVEIS: </h2>
          <input
            type="text"
            name="share"
            id="share"
            className="headerMarketInput"
          />
          <button className="headerMarketButton">PESQUISAR</button>
        </div>
        {/* divisor */}
        <hr />
        <div className="tableCardProduct">
          <CardProduct
            imageSrc="../../../public/assets/imgs/products/boneMGBE.jpeg"
            productName="BONÉ OFICIAL"
            brandName="MGBE"
            quantityAvailable={0}
            price={48.0}
            isAcessMarket={isAcessMarket}
            onAddToCart={openLoginLoja}
            onClose={closeLoginLoja}
          />
          <CardProduct
            imageSrc="../../../public/assets/imgs/products/bandeiraMGBE.jpeg"
            productName="BANDEIRA OFICIAL"
            brandName="MGBE"
            quantityAvailable={0}
            price={120.0}
            isAcessMarket={isAcessMarket}
            onAddToCart={openLoginLoja}
            onClose={closeLoginLoja}
          />
          <CardProduct
            imageSrc="../../../public/assets/imgs/products/brasaobordadoMGBE.jpeg"
            productName="BRASÃO BORDADO"
            brandName="MGBE"
            quantityAvailable={0}
            price={50.0}
            isAcessMarket={isAcessMarket}
            onAddToCart={openLoginLoja}
            onClose={closeLoginLoja}
          />
        </div>
        {/* divisor */}
        <hr />

        <LoginModal
          isVisible={isAcessMarket}
          onClose={closeLoginLoja}
          onFirstAccess={handleFirstAccess}
        />
      </QDConteudo>
    </div>
  );
}
