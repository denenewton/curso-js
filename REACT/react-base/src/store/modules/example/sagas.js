import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.botaoClicadoSuccess())
  } catch {
    yield put(actions.botaoClicadoFailure())
  }

}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
//exporta o que ele vai ouvir e oque ele tem que executar...