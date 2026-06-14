import { useEffect, useState } from 'react'
import './App.css'
import Botao from '../Componentes/botao'

function App() {
  const [cor, setCor] = useState('blue');
  const [texto, setTexto] = useState('Valor inicial');
  const [lista, setLista] = useState(['Maçã', 'Banana']);
  const [contador, setContador] = useState(1);
  const [palavras, setPalavras] = useState(-1);

  useEffect (() => {
    setContador(prev => prev + 1);
  },[lista]); 

  useEffect (() => {
    setPalavras(pl => pl + 1);
  },[texto]);

  function salvar() {
      return (          
          setLista([...lista, texto]),
          setTexto('')
      );
    }
  return (
    <>
    <div className='principal'>
{/* ----------------------------------------------------------------------------- */} 
        <header className='header'>
          <span> Primeiro Projeto React - Testando conceitos aprendidos </span>
        </header>
{/* ----------------------------------------------------------------------------- */}    
        <main className='main'>
          <div className='mudardecor'>
              <div className='botoes'>
                  <Botao onClick={() => setCor('green')}>Deixar verde</Botao>
                  <Botao onClick={() => setCor('red')}>Deixar vermelho</Botao>
                  <Botao onClick={() => setCor('blue')}>Deixar azul</Botao>
              </div>
              <input value={texto==='Valor inicial' ? '' : texto} onChange={(e) => setTexto(e.target.value) } placeholder=' Escreva para mudar a div'></input>  
              <div className='f'> 
                <i>(Escreva no input para alterar a div e acrescentar palavras a lista.) </i>
              </div> 
              <button className='salvar' onClick={() => salvar()}>Salvar input</button>
          </div>
{/* ----------------------------------------------------------------------------- */}
          <div className='container'>
            <div className='divalterada' style={{backgroundColor: cor}}>
              <div className='ee' > {texto} </div>  
            </div>
            <div className='divmap'>
              Palavras Digitadas:
              <ul>
                {lista.map((l) => (
                    <li> {l}</li>
                ))}
                Total: {contador}
                <br></br>
              </ul>
            </div>    
          </div> 
          <div className='palavras'> Alterações no input: {palavras}</div> 
        </main>
{/* ----------------------------------------------------------------------------- */}
        <footer className='footer'>
          <span> "© 2026 Igor dos Santos. Todos os direitos reservados."</span>
        </footer>
{/* ----------------------------------------------------------------------------- */}
     </div>
    </>
  )
}
export default App;
