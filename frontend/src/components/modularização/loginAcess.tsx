interface LoginModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFirstAccess: () => void;
}

export function LoginModal({
  isVisible,
  onClose,
  onFirstAccess,
}: LoginModalProps) {
  if (!isVisible) return null;

  return (
    <div className="cxLoginOverlay" onClick={onClose}>
      <div className="cxLogin" onClick={(e) => e.stopPropagation()}>
        <form action="submit" method="get" id="formAcessMarket">
          <div>
            <div className="w-full flex justify-end">
              <button type="button" className="w-8" onClick={onClose}>
                X
              </button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg gap-2 p-4 shadow-shape">
              <h1>ACESSO A LOJA DO ASSOCIADO</h1>
              <input
                className="text-black inputLogin"
                placeholder="Email"
                type="text"
                name="Email"
                id=""
                required
              />
              <input
                className="text-black inputLogin"
                placeholder="Password"
                type="password"
                name="Password"
                id=""
                required
              />
              <p className="text-xs">
                Se for o primeiro acesso, informe seu email e
              </p>
              <p className="text-xs">
                clique no link <strong>Primeiro acesso</strong>.
              </p>
            </div>
          </div>
        </form>
        <div className="w-full relative flex">
          <div className="flex flex-col justify-center relative h-14">
            <div className="text-white p-2 text-sm hover:text-orange-700 transition-all">
              <input
                className="m-1"
                type="checkbox"
                id="RemenberPassword"
                name="RemenberPassword"
              />
              <label htmlFor="RemenberPassword">Lembrar Senha</label>
            </div>
            <button
              id="btnPrimeiroAcesso"
              type="button"
              onClick={onFirstAccess}
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
  );
}
