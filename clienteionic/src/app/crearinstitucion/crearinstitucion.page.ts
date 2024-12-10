import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonInput, IonItem, IonButton, IonNote } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Dialog } from '@capacitor/dialog';
import { AlertController } from '@ionic/angular/standalone'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crearinstitucion',
  templateUrl: './crearinstitucion.page.html',
  styleUrls: ['./crearinstitucion.page.scss'],
  standalone: true,
  imports: [IonNote, IonButton, IonItem, IonInput, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, RouterLink]
})
export class CrearinstitucionPage implements OnInit {

  private enviroment = environment;

  public institucion: {'nombre': String, 'informaciongeneral': String} = {'nombre': '', 'informaciongeneral': ''};
  errorDatos: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  validarDatos() {
    if (this.institucion.nombre.trim() === '' || this.institucion.informaciongeneral.trim() === '') {
      this.errorDatos = 'Los datos son obligatorio.';
    } else if (this.institucion.nombre.length < 1 || this.institucion.informaciongeneral.length < 1) {
      this.errorDatos = 'Los campos debe tener al menos 2 caracteres.';
    } else {
      this.errorDatos = null; // Sin errores
    }
  }

  async onSave(){

    if (!this.errorDatos ) {
      const options = {
        url: this.enviroment.apiUrl + 'createInstitucion',
        headers: { 'Content-Type': 'application/json' },
        data: this.institucion
      };
    
      const response: HttpResponse = await CapacitorHttp.post(options);

      window.location.reload();
    } else {
      console.log('Por favor, corrige los errores antes de enviar.');
      
    }

  }

}
