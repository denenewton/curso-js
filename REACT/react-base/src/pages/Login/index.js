import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
//import * as exampleActions from '../../store/modules/example/actions';
import { useDispatch } from 'react-redux';//disparador da acao...

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault()

    dispatch({
      type: 'BOTAO_CLICADO'
    })

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
