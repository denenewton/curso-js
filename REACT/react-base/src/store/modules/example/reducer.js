import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
  botaoClicado: false,
}
// O reducer tem 3 acoes basicas para ouvir um success, request e uma Failure.
export default function reducer(state = initialState, action) {
  const newState = { ...state }
  switch (action.type) {

    case type.BOTAO_CLICADO_SUCCESS:
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    case type.BOTAO_CLICADO_REQUEST:
      console.log('Estou requisitando...');
      return newState;

    case type.BOTAO_CLICADO_FAILURE:
      toast.error('Falha na requisisão!')
      return newState;

    default:
      return newState;
  }
}