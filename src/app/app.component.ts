import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  word = 'RAIN';
  ocultW = '_ ';

  attempt = 0;

  gano = false;
  pierde = false;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor() {

    this.ocultW = '_ '.repeat(this.word.length);

  }
  comprobar(letra: any) {

    this.existeLetra(letra);
  
    let ocultWordArr = this.ocultW.split(' ');

    for (let n = 0; n < this.word.length; n++) {

      if (this.word[n] === letra) {
        ocultWordArr[n] = letra;
      }

    }
    this.ocultW = ocultWordArr.join(' ');
    this.verificarGane();
  }
 
  verificarGane() {
    
    const wordArr = this.ocultW.split(' ');
    const evaWord = wordArr.join('');

    if (evaWord === this.word) {
      this.gano = true;
      console.log('the user win');
    }

    if (this.attempt >= 9) {
      this.pierde = true;
      console.log('user lose');
    }
    console.log(wordArr);
  }

  existeLetra(letra: any) {
    
    if (this.word.indexOf(letra) >= 0) {
      //console.log('letra existe');
    } else {
     // console.log('letra no existe');
    }

    this.attempt++;

  }
}
