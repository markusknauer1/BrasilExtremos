import { useEffect, useState } from "react";
import { BackgroundContactUs } from "../../components/modularização/backgroundContactUs";
import { DefaultMenu } from "../../components/componentes/menu-principal";
import { QDConteudo } from "../../components/modularização/quadroDeConteudo";

export function ContactUs() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("contactFormEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      // Opcional: Limpe o armazenamento após leitura
      localStorage.removeItem("contactFormEmail");
    }
  }, []);
  return (
    <div className="flex gap-3 flex-col items-center ">
      <BackgroundContactUs />
      <DefaultMenu />
      <QDConteudo>
        <div className="FaleConosco">
          <strong>
            <h2 className="flex text-center justify-center">
              FALE COM O BRASIL EXTREMOS
            </h2>
          </strong>
          {/* divisor */}
          <hr />
          <form action="submit" className="formFaleConosco">
            <label htmlFor="">Nome</label>
            <input type="text" name="name" id="" />
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Assunto</label>
            <input type="text" name="subject" id="" />
            <label htmlFor="">Detalhes</label>
            <textarea name="details" id="" rows={5} cols={33} />
            <button type="submit">ENVIAR</button>
          </form>
          {/* divisor */}
          <hr className="w-[100%] h-[2px] bg-white" />
          <h2 className="flex text-center justify-center">
            #ESTE SITE ESTÁ SENDO CONSTRUIDO PARA MANTER TODOS BEM INFORMADOS.
          </h2>
        </div>
      </QDConteudo>
    </div>
  );
}
