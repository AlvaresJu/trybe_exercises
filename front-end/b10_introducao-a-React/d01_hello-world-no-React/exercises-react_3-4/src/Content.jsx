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
    <ul key={conteudo}>
      <li>O conteúdo é: {conteudo}</li>
      <li>Status: {status}</li>
      <li>Bloco: {bloco}</li>
    </ul>
  );
};

class Content extends React.Component {
  render() {
    return (
      <main>
        {conteudos.map(addContentList)}
      </main>
    );
  }
}

export default Content;
