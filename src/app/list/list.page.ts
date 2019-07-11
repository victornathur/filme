import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ListModalPage } from '../list-modal/list-modal.page';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { FilmeServiceService } from '../services/filme-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  filmes = []
  constructor(public modalController: ModalController, private storage: Storage, private http: HttpClient, public loadingController: LoadingController, public service: FilmeServiceService) {
    this.filmes = [];
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.list().subscribe(
        (data) => {
          this.filmes = [data]
          this.storage.set('filme', this.filmes)
          loader.dismiss()
        }
      )
    })
  }
  
  async modal() {
    const modal = await this.modalController.create({
      component: ListModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((filme) => {
      this.add(filme.data)
    })
  }
  add(filme) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.post(filme).subscribe(
        (data) => {
          this.filmes.push(data)
          this.storage.set('filme', this.filmes)
          loader.dismiss()
        }
      )
    })
  }
}
