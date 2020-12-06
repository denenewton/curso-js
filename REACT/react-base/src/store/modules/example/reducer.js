const initialState = {
  botaoClicado: false,
}

export default function reducer(state = initialState, action){
  const newState = { ...state }
  switch (action.type) {
    case 'BOTAO_CLICADO':
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default:
      return newState;
  }
}