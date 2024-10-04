import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";
import { Link } from "react-router-dom";

export function Acess() {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <div className="flex flex-col items-center justify-center w-[100%] h-screen gap-5 bgOverlay ">
          {/* header */}
          <div className="flex flex-col items-center absolute top-[20px] w-[100%] gap-5 ">
            <div className="flex flex-col items-center w-[100%] gap-1">
              <h1 className="w-[100%] flex text-center justify-center ">
                PORTAL DO ASSOCIADO
              </h1>
              <h2 className="w-[100%] flex text-center justify-center">
                ACESSO A HISTÓRICOS DE PEDIDOS, MENSAGENS E FINANCEIRO.
              </h2>
            </div>
            {/* divisor */}
            <hr />
          </div>
          {/* conteudo */}
          <div className="flex flex-col items-center justify-center bg-black rounded-lg gap-2 p-4 shadow-shape">
            <h1>ACESSO A ÁREA DO ASSOCIADO</h1>{" "}
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
              clique no link <strong>Lembrar Senha</strong> .
            </p>
            <div className="flex relative w-[100%] h-14">
              <div className="text-white absolute left-0 p-2 text-sm hover:text-orange-700 transition-all  ">
                <input
                  className="m-1"
                  type="checkbox"
                  id="Lembrar Senha"
                  name="Lembrar Senha"
                />
                <label htmlFor="Lembrar Senha">Lembrar Senha</label>
              </div>
              <Link
                to="/pages/UserProfile"
                id="btnAcessar"
                className="absolute right-0"
              >
                Acessar
              </Link>
            </div>
          </div>
        </div>
      </QDConteudo>
    </div>
  );
}
