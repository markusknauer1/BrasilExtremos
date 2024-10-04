import { AniversaryCard } from "../components/modularização/aniversaryCard";
import { Background } from "../components/modularização/background";
import { DefaultMenu } from "../components/componentes/menu-principal";
import { QDConteudo } from "../components/modularização/quadroDeConteudo";
import { SocialButton } from "../components/componentes/socialButton";

export function HomePage() {
  return (
    <div className="flex gap-3 flex-col items-center ">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <img
          src="../public/assets/imgs/MG-2021.jpeg"
          className="flex h-2/4 w-full justify-center bg-zinc-800"
          alt=""
        />
        <strong>
          <h2 className="flex text-center justify-center">
            O MOTO GRUPO BRASIL EXTREMOS ESTÁ CRESCENDO CADA DIA MAIS, FAÇA
            PARTE DESSA HISTÓRIA!
          </h2>
        </strong>
        <div className="flex cxApresentacao">
          <div className="flex flex-col items-center bg-[rgba(255,255,255,0.2)] border-solid border-[2px] border-zinc-400 p-2">
            <img
              className="fotoMaxMarcia"
              src="../public/assets/imgs/Max-Marcia.jpeg"
              alt=""
            />
            <div className="flex flex-col text-center justify-center">
              <p>Acompanhe e Curta</p>
              <p>Max Silva Viagens</p>
            </div>
            <div className="flex ">
              <SocialButton
                imgSrc="../public/assets/imgs/MGBE_files/iconeYoutube.png"
                altText="Youtube.com"
                title="@MaxSilvaViagens_Moto.ZL.Brazil"
                link="https://www.youtube.com/channel/UC5yMXTIkTCnz2YSIAEqHEiw"
              />
              <SocialButton
                imgSrc="../public/assets/imgs/MGBE_files/Instagram-logo.png"
                altText="Instagram"
                title="@max.silva.viagens"
                link="https://www.instagram.com/max.silva.viagens"
              />
            </div>
            <div className="flex flex-col text-center justify-center">
              <p>Acompanhe e Curta</p>
              <p>Márcia Aniceto</p>
            </div>
            <div className="flex ">
              <SocialButton
                imgSrc="../public/assets/imgs/MGBE_files/Instagram-logo.png"
                altText="Youtube.com"
                title="@marcinha_aniceto"
                link="https://www.instagram.com/marcinha_aniceto/?igshid=y05r9sx8kjv9"
              />
            </div>
          </div>
          <div className="w-[60%] cxApresentacaoContent p-2 bg-[rgba(96,96,96, 0.5)] border-solid border-[2px] border-zinc-400 ">
            <p>
              O MOTO GRUPO BRASIL EXTREMOS teve sua origem graças a iniciativa
              do nosso grande amigo MAX SILVA, que ao se preparar para mais uma
              de suas aventuras, criou um grupo de Whatsapp com pessoas de
              diversos locais os quais teve contato pelo seu canal do Youtube,
              da sua página do Instagran e as pessoas que foi conhecendo pelos
              caminhos que percorreu.{" "}
            </p>
            <br />
            <p>
              Esse grupo inicialmente começou a oferecer apoio a todos os irmãos
              e irmãs motociclistas nas estradas e que estivesse na rota de
              algum membro do grupo.{" "}
            </p>
            <br />
            <p>
              O nome do grupo de Whatsapp é Brasil Extremos, então foi criado e
              fundado por alguns membros o MOTO GRUPO BRASIL EXTREMOS.{" "}
            </p>
            <br />
            <p>
              Hoje temos membros associados de 14 estados e o Distrito Federal,
              e estamos crescendo a cada mês.{" "}
            </p>
            <br />
            <p>
              O Moto Grupo já participou de alguns eventos hasteando a bandeira
              e no ano de 2021 realizando a primeira confraternização com
              membros da região de São Paulo.
            </p>
            <br />
            <p>
              A ideia nasceu em Agosto/2021 e fundado oficialmente em
              Outubro/2021 quando foi realizado a primeira Assembleia da
              Associação.{" "}
            </p>
            <br />
            <h1>
              Faz parte da Primeira Mesa Diretora e de Gestão da Associação:
            </h1>
            <ul>
              <li>
                <p>
                  <strong>Alex Rasquinho - Presidente</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>João Batista - Vice-Presidente</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Leandro Moreno, Márcio Cabral e Sandro Oliver - Conselheiros
                    Fiscais e Disciplinares
                  </strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Raimundo Stolze e Carlão de Mossoró - Conselheiros da Região
                    Norte e Nordeste
                  </strong>
                </p>
              </li>
            </ul>
          </div>
          <div className="cxAniversantiantes">
            <h1 className="flex text-center justify-center">
              Aniversariantes do Mês de: "MÊS"
            </h1>
            <div className="cxAniversariantesContent">
              <AniversaryCard
                imageSrc="../../../public/assets/imgs/MGBE_files/semfoto.png"
                aniversaryName="aniversariante 1"
                aniversarydate="00/00/00"
              />
              <AniversaryCard
                imageSrc="../../../public/assets/imgs/MGBE_files/semfoto.png"
                aniversaryName="aniversariante 2"
                aniversarydate="00/00/00"
              />
              <AniversaryCard
                imageSrc="../../../public/assets/imgs/MGBE_files/semfoto.png"
                aniversaryName="aniversariante 3"
                aniversarydate="00/00/00"
              />
              <AniversaryCard
                imageSrc="../../../public/assets/imgs/MGBE_files/semfoto.png"
                aniversaryName="aniversariante 4"
                aniversarydate="00/00/00"
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center text-center flex-col">
          <h1>Não esqueça de nos seguir nas redes sociais:</h1>
          <div>
            <SocialButton
            imgSrc="../public/assets/imgs/icons/redes/iconeFacebookPreto.png"
            altText="Moto Grupo BRASIL EXTREMOS"
            title="Moto Grupo BRASIL EXTREMOS"
            link="https://www.facebook.com/groups/383883379922876"
          />
          <SocialButton
            imgSrc="../public/assets/imgs/icons/redes/instagram.png"
            altText="brasilextremosmg"
            title="@brasilextremosmg"
            link="https://www.instagram.com/brasilextremosmg/"
          /></div>
        </div>
      </QDConteudo>
    </div>
  );
}
