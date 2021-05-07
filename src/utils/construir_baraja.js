import shuffle from 'lodash.shuffle';
import ImagenesClasses from './imagenesClasses';

const NUMERO_DE_CARTAS = 10;

export default () =>  {
  //console.log(FontAwesomeClasses);
  const imagenesClasses = ImagenesClasses();
  let cartas = [];

  while (cartas.length < NUMERO_DE_CARTAS) {
    const index = Math.floor(Math.random() * imagenesClasses.length);
    const carta = {
      icono: imagenesClasses.splice(index, 1)[0],
      fueAdivinada: false
    };

    cartas.push(carta);
    cartas.push({...carta});
  }

  return shuffle(cartas);
};