import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const addContentList = ({ conteudo, bloco, status }) => {
  return (
    <ul key={conteudo} className="content-card">
      <li>O conteúdo é: {conteudo}</li>
      <li className="content-line">Status: {status}</li>
      <li>Bloco: {bloco}</li>
    </ul>
  );
};

class Content extends React.Component {
  render() {
    return (
      <main className="main">
        {conteudos.map(addContentList)}
      </main>
    );
  }
}

export default Content;
