import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // Passo 3 - Câmera



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  ngOnInit() {
  }
  constructor(private storage: Storage, private camera: Camera) {}

  novo_usuario={
    "nome":"",
    "url":""

  }
  
  add(usuario) {
    this.usuarios.push(usuario)
    this.storage.set('usuario', this.usuarios)
  }
  take_picture() { // Passo 4 | Conjunto de opções...
    const options: CameraOptions = {
      quality: 100, // Qualidade da Foto. 0..100
      destinationType: this.camera.DestinationType.DATA_URL, // Qual é o tipo de destino, referencia local
      encodingType: this.camera.EncodingType.JPEG, // O tipo da extenção da imagem
      mediaType: this.camera.MediaType.PICTURE, // Qual é o tipo de aquivo.. Foto, vídeo..
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.novo_usuario.url = 'data:image/jpeg;base64,' + imageData; // Definição do local de salvamento da imagem
    }, (err) => {
      alert(err)
    });
  }
  usuarios=[]
}

