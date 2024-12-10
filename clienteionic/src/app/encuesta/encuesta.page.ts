import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFab, IonFabButton, IonIcon, IonFabList, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonList, IonButton, IonItemSliding, IonAvatar, IonLabel, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { addOutline, chevronBackCircleOutline, chevronDown, chevronDownCircle, chevronDownOutline, chevronDownSharp, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment'


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
  standalone: true,
  imports: [IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItemSliding, IonButton, IonList, IonItem, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonFabList, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule, IonMenuButton, RouterLink]
})
export class EncuestaPage implements OnInit {

  public encuesta: any = [];
  public idsEncuesta: String = '';
  public selectEncuesta: any = {};

  private enviroment = environment;
  
 

  constructor () {
    addIcons({ addOutline, chevronDown, chevronDownOutline, chevronDownSharp, chevronBackCircleOutline, chevronDownCircle, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp});
  }

  async ngOnInit() {
    const options = {
      url: this.enviroment.apiUrl + 'encuestas',
      headers: { 'Content-Type': 'application/json' }
    };
  
      const response: HttpResponse = await CapacitorHttp.get(options);
      this.encuesta = response.data;
      this.selectEncuesta = this.encuesta;
    
  }

  onSelectEncuesta(encuesta: any){
    this.selectEncuesta = encuesta;
  }

  onDeleteEncuesta(){
    this.selectEncuesta = {};
  }

  async deleteEncuesta(encuesta: any){
    this.idsEncuesta = encuesta.id;
    console.log("el id selecionado es " + this.idsEncuesta);


    const options = {
      url: this.enviroment.apiUrl + 'encuesta/' + this.idsEncuesta,
      headers: { 'Content-Type': 'application/json' },
      data: this.idsEncuesta
    };
  
    const response: HttpResponse = await CapacitorHttp.delete(options);

    window.location.reload();
  }

  
}
