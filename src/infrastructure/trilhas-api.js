import fetch from 'node-fetch';
import config from '../config';

const getAll = () =>
  fetch(config.trilhas.url)
    .then( response => response.json() )
    .then( response => response.result )

export default {
  getAll,
};
