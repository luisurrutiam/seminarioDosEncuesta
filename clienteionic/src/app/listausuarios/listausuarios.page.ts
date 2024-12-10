import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonButtons, IonMenuButton, IonItemOptions, IonItemOption, IonItemSliding, IonModal, IonFabButton, IonFab, IonFabList } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { RouterLink } from '@angular/router';
import { addOutline, chevronBackCircleOutline, chevronDown, chevronDownCircle, chevronDownOutline, chevronDownSharp, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.page.html',
  styleUrls: ['./listausuarios.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFab, IonFabButton, IonModal, IonItemSliding, IonItemOption, IonItemOptions, IonButtons, IonIcon, IonButton, IonMenuButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ListausuariosPage implements OnInit {

  public user: any = [];

  public iduser: String = '';

  public selectUser: any = {};

  private enviroment = environment;  
  
  constructor() {
    addIcons({ addOutline, chevronDown, chevronDownOutline, chevronDownSharp, chevronBackCircleOutline, chevronDownCircle, documentOutline, documentSharp, document, addCircle, addCircleOutline, addCircleSharp, add, addSharp, trash, trashOutline, trashSharp, reload, reloadOutline, reloadSharp});
   }

  async ngOnInit() {
    const options = {
      url: this.enviroment.apiUrl + 'users',
      headers: { 'Content-Type': 'application/json' }
    };
  
    const response: HttpResponse = await CapacitorHttp.get(options);
    this.user = response.data;
    this.selectUser = this.user;
  }

  onSelectUser(user: any){
    this.selectUser = user;
  }

  onDeleteUser(){
    this.selectUser = {};
  }

  async deleteUserTrash(user: any){
    this.iduser = user.id;
    console.log("el id selecionado es " + this.iduser);


    const options = {
      url: this.enviroment.apiUrl + 'user/' + this.iduser,
      headers: { 'Content-Type': 'application/json' },
      data: this.iduser
    };
  
    const response: HttpResponse = await CapacitorHttp.delete(options);

    window.location.reload();
  }

 

}
