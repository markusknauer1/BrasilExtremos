// UserRegistration

import { Background } from "../../../components/modularização/background";
import { DefaultMenu } from "../../../components/componentes/menu-principal";
import { QDConteudo } from "../../../components/modularização/quadroDeConteudo";
import { Link } from "react-router-dom";

export function UserRegistration() {
  return (
    <div className="flex gap-3 flex-col items-center">
      <Background />
      <DefaultMenu />
      <QDConteudo>
        <h1 className="flex text-center justify-center">
          <strong>Cadastro/ Atualização de dados do Usuário</strong>
        </h1>
        <h2>
          Preencha o formulário abaixo para se cadastrar/ Atualizar os dados no Moto Grupo Brasil
          Extremos - MGBE
        </h2>

        {/* divisor */}
        <hr />

        <form className="flex flex-col gap-4 w-full max-w-lg">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              className="border p-2 rounded-md"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border p-2 rounded-md"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="font-semibold">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              className="border p-2 rounded-md"
              placeholder="Digite seu telefone"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpf" className="font-semibold">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="border p-2 rounded-md"
              placeholder="Digite seu CPF"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="birthdate" className="font-semibold">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              className="border p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">
              Endereço
            </label>
            <input
              type="text"
              id="address"
              className="border p-2 rounded-md"
              placeholder="Digite seu endereço"
              required
            />
          </div>
          <Link
            to="/pages/UserProfile"
            className="bg-red-500 text-center text-white p-2 rounded-md hover:bg-red-600"
          >
            Atualizar
          </Link>
          <Link
            to="/pages/UserProfile"
            className="bg-red-500 text-center text-white p-2 rounded-md hover:bg-red-600"
          >
            Cadastrar
          </Link>
        </form>
      </QDConteudo>
    </div>
  );
}
