'use strict';

let banco = [];
const getBanco = () => JSON.parse(localStorage.getItem('todo List')) ?? [];