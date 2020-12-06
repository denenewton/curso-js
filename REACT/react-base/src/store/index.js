import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'BOTAO_CLICADO':
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default:
      return newState;
  }
}

const store = createStore(reducer)

export default store;
