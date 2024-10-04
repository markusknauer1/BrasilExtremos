interface CardProductProps {
  imageSrc: string;
  productName: string;
  brandName: string;
  quantityAvailable: number;
  price: number;
  isAcessMarket: boolean;
  onAddToCart: () => void;
  onClose: () => void;
}

export function CardProduct({
  imageSrc,
  productName,
  brandName,
  quantityAvailable,
  price,
  isAcessMarket,
  onAddToCart,
  onClose,
}: CardProductProps) {
  return (
    <div className="cardProduct">
      <div className="cardProductProduct">
        <img src={imageSrc} alt={productName} className="cardProductImg" />
        <h1>{productName}</h1>
        <h2>{brandName}</h2>
        <p>
          Quantidade disponível: <span>{quantityAvailable}</span>
        </p>
        <p>
          R$ <span>{price.toFixed(2)}</span>
        </p>
      </div>
      {isAcessMarket ? (
        <button className="cardProductMarket" onClick={onClose}>
          <img
            src="../../../public/assets/imgs/icons/addCart.png"
            alt="Adicionar ao carrinho"
          />
        </button>
      ) : (
        <button className="cardProductMarket" onClick={onAddToCart}>
          <img
            src="../../../public/assets/imgs/icons/addCart.png"
            alt="Adicionar ao carrinho"
          />
        </button>
      )}
      {isAcessMarket && (
        <div className="cxLoginOverlay" onClick={onClose}>
          <div className="cxLogin" onClick={(e) => e.stopPropagation()}>
            <form action="submit" method="get" id="formAcessMarket">
              <div className="">
                <div className="w-full flex justify-end">
                  <button className="w-8 " onClick={onClose}>
                    X
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg gap-2 p-4 shadow-shape">
                  <h1>ACESSO A LOJA DO ASSOCIADO</h1>{" "}
                  <input
                    className="text-black inputLogin"
                    placeholder="Email"
                    type="text"
                    name="Email"
                    id=""
                  />
                  <input
                    className="text-black inputLogin"
                    placeholder="Password"
                    type="password"
                    name="Password"
                    id=""
                  />
                  <p className="text-xs">
                    Se for o primeiro acesso, informe seu email e
                  </p>
                  <p className="text-xs">
                    clique no link <strong>Primeiro acesso</strong> .
                  </p>
                </div>
              </div>
            </form>
            <div className="w-full relative flex">
              <div className="flex flex-col justify-center relative h-14 ">
                <div className="text-white p-2 text-sm hover:text-orange-700 transition-all">
                  <input
                    className="m-1"
                    type="checkbox"
                    id="Lembrar Senha"
                    name="Lembrar Senha"
                  />
                  <label htmlFor="Lembrar Senha">Lembrar Senha</label>
                </div>
                <button
                  id="btnPrimeiroAcesso"
                  type="button"
                  onClick={() => {
                    const form = document.getElementById(
                      "formAcessMarket"
                    ) as HTMLFormElement;
                    if (form.checkValidity()) {
                      form.action = "../associados/index.tsx";
                      form.submit();
                    } else {
                      console.error("Formulário inválido!");
                    }
                  }}
                >
                  Primeiro Acesso
                </button>
              </div>
              <div className="flex flex-1"></div>
              <button
                id="btnAcessar"
                type="submit"
                form="formAcessMarket"
                value="Submit"
              >
                Acessar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
