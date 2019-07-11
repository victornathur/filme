import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome;
  url;

  constructor(private storage: Storage) {
    this.usuarios = []; 
  }

add(usuario) {
  this.usuarios.push(usuario)
  this.storage.set('usuario', this.usuarios)
  }

usuarios = []

}
