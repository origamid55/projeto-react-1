import { ReactNode, MouseEvent } from 'react';

// Definimos os tipos exatos para o children e para o onClick
interface BotaoProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void; 
}

const Botao = ({ children, onClick }: BotaoProps) => {
  return (
     <button onClick={onClick}> {children} </button>
  )
}

export default Botao;