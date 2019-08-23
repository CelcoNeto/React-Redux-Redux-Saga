import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
//------------------------------------------------------------------------------------------------------
// ---CREATESTORE && COMBINEREDUCERS---
//    São métodos do REDUX:
//     -> createStore - Método que cria o store da sua aplicação.
//     -> combineReducers - Muito provavelmente a aplicação terá múltiplos reducers, este método fará a
//        "combinação" de todos os reducers e armazenando em apenas 1 reducer.
//------------------------------------------------------------------------------------------------------
//  ---PROVIDER---
//     O componente que conecta a aplicação ao store do REDUX, que é importado da biblioteca 'react-redux',
//     uma biblioteca intermediária para a comunicação entre o REACT e o REDUX.
//     O Provider ele envolve toda a sua aplicação passando o estado para toda a aplicação
//-------------------------------------------------------------------------------------------------------
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import Counter from './counter';

const reducers = combineReducers({
  counter: counterReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);
