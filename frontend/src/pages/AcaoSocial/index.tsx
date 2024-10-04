// SocialAction

import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";
import Rifas from "../../components/modularização/rifa";

export function SocialAction() {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <h1 className="flex text-center justify-center">
          <strong>RIFAS</strong>
        </h1>
        <h2>Você está na área de Ação Social do Moto Grupo Brasil Extremos</h2>
        {/* divisor */}
        <hr />
        <div className="flex flex-col w-full h-2/4 gap-4">
          <div className="flex flex-col ">
            <h1 className="flex text-center ">
              <strong>RIFAS ATIVAS</strong>
            </h1>
            <p>
              "nenhuma rifa ativa no momento"</p>
              <p>"somente para apresentação em
              teste"</p>
            
            <div className="flex overflow-auto h-auto max-h-[380px]">
              <Rifas />
            </div>
          </div>
          {/* divisor */}
          <hr />
          <div>
            <h1 className="flex text-center ">
              <strong>CAMPANHAS ATIVAS</strong>
            </h1>
            <p>
              "nenhuma campanha ativa no momento""-somente para apresentação em
              teste"
            </p>
          </div>
        </div>
      </QDConteudo>
    </div>
  );
}
