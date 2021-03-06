import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import { useDispatch } from 'react-redux';//disparador da acao...
import * as action from '../../store/modules/example/actions' // importado as acoes...
export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault()
    dispatch(action.botaoClicadoRequest())
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
