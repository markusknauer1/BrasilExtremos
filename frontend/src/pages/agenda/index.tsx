import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";

export function Schedule() {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <img
          src="../public/assets/imgs/20210919_104703.jpg"
          className="flex w-full justify-center bg-zinc-800"
          alt=""
        />
        <div className="w-[100%] gap-2 flex flex-col text-center justify-center">
          <strong>
            <h1>AGENDA DE EVENTOS DO MOTO GRUPO</h1>
          </strong>
          <h2>TODOS OS EVENTOS E MARCOS IMPORTANTES COM A GALERA</h2>
          {/* divisor */}
          <hr />
          <h2>
            ESTE SITE ESTÁ SENDO CONSTRUIDO PARA MANTER TODOS BEM INFORMADOS.
          </h2>
        </div>
      </QDConteudo>
    </div>
  );
}
