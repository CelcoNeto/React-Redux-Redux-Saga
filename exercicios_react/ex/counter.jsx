import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChanged } from './counterActions';

const Counter = props => (
  <div>
    <h1>{props.counter.number}</h1>
    <input
      onChange={props.stepChanged}
      value={props.counter.step}
      type='number'
    />
    <button onClick={props.dec}>Dec</button>
    <button onClick={props.inc}>Inc</button>
  </div>
);
//  MAPSTATETOPROPS transforma um trecho do estado da Store em uma prop utilizável pelo componente,
//  com o nome counter.
const mapStateToProps = state => ({ counter: state.counter });

//  MAPDISPATCHTOPROPS permite que você envie alterações de estado para sua STORE.
//  Um exemplo seria um clique de botão que aciona uma atualização ou um carregamento
//  automático de dados quando o componente é montado.

const mapDispatchToProps = dispatch =>
  bindActionCreators({ inc, dec, stepChanged }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
