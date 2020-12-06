import * as type from '../types';

export function botaoClicadoRequest(){
  return {
    type: type.BOTAO_CLICADO_REQUEST,
  }
}
export function botaoClicadoSuccess(){
  return {
    type: type.BOTAO_CLICADO_SUCCESS,
  }
}
export function botaoClicadoFailure(){
  return {
    type: type.BOTAO_CLICADO_FAILURE,
  }
}
