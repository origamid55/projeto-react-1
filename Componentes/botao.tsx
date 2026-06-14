// Adicionamos o "type" bem aqui:
import type { ReactNode, MouseEvent } from 'react';

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