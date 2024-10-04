import { Background } from "../../components/modularização/background";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";
import { AssociateCard } from "../../components/modularização/cardAssociates";
import { AssociateMap } from "../../components/componentes/buttonLocal";

export function Associates() {
  const states = [
    "BR",
    "AL",
    "BA",
    "CE",
    "DF",
    "MA",
    "MS",
    "MG",
    "PB",
    "PR",
    "PE",
    "RJ",
    "RN",
    "RO",
    "SC",
    "SP",
    "TO",
  ];
  const handleStateSelect = (selectedState: string) => {
    console.log(`Filtrando associados do estado: ${selectedState}`);
    // Implementar lógica de filtragem aqui
  };
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
        <div className="flex flex-col w-[100%]">
          <strong>
            <h1 className="flex w-[100%] gap-2 text-[1.5rem]">
              NOSSOS ASSOCIADOS
            </h1>
          </strong>
          <h2 className="flex w-[100%] gap-2 text-[1.5rem]">
            FAÇA PARTE DESSA HISTÓRIA!
          </h2>
        </div>
        {/* divisor */}
        <hr />
        <AssociateMap states={states} onStateSelect={handleStateSelect} />
        {/* divisor */}
        <hr />
        <div className="associateFilter">
          <strong>
            <select name="" id="">
              <option value="">TODOS</option>
              <option value="">ASSOCIADO</option>
              <option value="">CADASTRADO</option>
              <option value="">CONSELHEIRO</option>
              <option value="">DIRETORIA</option>
            </select>
          </strong>
          <strong>
            <input type="text" />
          </strong>
          <button>
            <img src="../../../public/assets/imgs/icons/search.png" alt="" />
          </button>
        </div>
        {/* divisor */}
        <hr />
        <div className="associate">
          <AssociateCard
            imageSrc="../../../public/assets/imgs/perfil/presidente.jpg"
            associateName="RASQUINHO"
            associateState="SÃO PAULO"
            associatePosition="DIRETORIA desde: 26/11/2021"
            associateEmail="alex.rasquinho@gmail.com"
            associateSinopse=" É UMA GRANDE HONRA TER SIDO ESCOLHIDO COMO PRIMEIRO PRESIDENTE
                DESSE GRUPO DE PESSOAS ABENÇOADAS QUE ESTÃO AJUDANDO A ESCREVER
                UMA GRANDE HISTÓRIA."
            associateYoutube="https://www.youtube.com/@AlexRasquinho"
            titleYoutube="@AlexRasquinho"
            associateFacebook="https://www.facebook.com/alex.rasquinho"
            titleFacebook="alex.rasquinho"
            associateInstagram="https://www.instagram.com/alex_rasquinho/"
            titleInstagram="@alex_rasquinho"
          />
          <AssociateCard
            imageSrc="../../../public/assets/imgs/perfil/perfilFacebook.jpg"
            associateName="Markus Knauer"
            associateState="SÃO PAULO"
            associatePosition="DESENVOLVEDOR desde: 20/02/2022"
            associateEmail="knauer.2009@hotmail.com"
            associateSinopse=" DESENVOLVEDOR JR. DO SISTEMA DO MGBE"
            associateYoutube="https://www.youtube.com/@2014mkar"
            titleYoutube="@2014mkar"
            associateFacebook="https://www.facebook.com/profile.php?id=61556881060969"
            titleFacebook="Markus Knauer"
            associateInstagram="https://www.instagram.com/markus_knauerar/"
            titleInstagram="@markus_knauerar"
          />
        </div>
      </QDConteudo>
    </div>
  );
}
