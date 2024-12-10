import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonCardContent, IonButton, IonIcon, IonItemSliding, IonAvatar, IonLabel, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonFabList } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment'
import { addOutline, chevronBackCircleOutline, chevronDown, chevronDownCircle, chevronDownOutline, chevronDownSharp, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.page.html',
  styleUrls: ['./institucion.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFabButton, IonFab, IonItemOption, IonItemOptions, IonLabel, IonAvatar, IonItemSliding, IonIcon, IonButton, IonCardContent, IonItem, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, RouterLink]
})
export class InstitucionPage implements OnInit {

  public institucion: any = [];
  public ids: String = '';
  public selectInstitucion: any = {};

  private enviroment = environment;  

  constructor() {
    addIcons({ addOutline, chevronDown, chevronDownOutline, chevronDownSharp, chevronBackCircleOutline, chevronDownCircle, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp});
   }

 async ngOnInit() {
  const options = {
    url: this.enviroment.apiUrl + 'institucions',
    headers: { 'Content-Type': 'application/json' }
  };

    const response: HttpResponse = await CapacitorHttp.get(options);
    this.institucion = response.data;
    this.selectInstitucion = this.institucion;
  }

  onSelectUser(institucion: any){
    this.selectInstitucion = institucion;
  }

  onDeleteUser(){
    this.selectInstitucion = {};
  }

  async deleteInstituc(institucion: any){
    this.ids = institucion.id;
    console.log("el id selecionado es " + this.ids);


    const options = {
      url: this.enviroment.apiUrl + 'institucion/' + this.ids,
      headers: { 'Content-Type': 'application/json' },
      data: this.ids
    };
  
    const response: HttpResponse = await CapacitorHttp.delete(options);

    window.location.reload();
  }

}
