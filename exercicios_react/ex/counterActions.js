/*
  --ACTIONS--
  São básicamente as ações que seu componente poderá executar, neste exemplo, 
  meu componente button poderá 'INC' incrementar ou 'DEC' decrementar.
*/
export function inc() {
  return { type: 'INC' };
}

export function dec() {
  return { type: 'DEC' };
}

export function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value
  };
}

//--PAYLOAD-- (A nomenclatura PAYLOAD é uma convenção utilizada, mas pode ser qualquer nome)
// É um dado que vem junto de uma ação. Ex: Você tem uma ação que altera o valor, e junto com essa ação vem
// um valor novo
