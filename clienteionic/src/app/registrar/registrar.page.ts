import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validator, FormBuilder,
ReactiveFormsModule,  FormsModule, Validators} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, IonItem, IonButton, IonLabel, IonText, IonInputPasswordToggle, IonMenuButton, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonList, IonText, IonFooter, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInputPasswordToggle, IonMenuButton, IonSelect, IonSelectOption, RouterLink]
})
export class RegistrarPage implements OnInit {
  
  private enviroment = environment; 

  public user:  {'cedula': String, 'nombre': String, 'apellido': String, 'estado': String, 'email': String, 'password': String} ={'cedula': "", 'nombre': '', 'apellido': '', 'estado': '', 'email': '', 'password': ''};

  

  constructor() { 

    

  }

  async ngOnInit() {
    const options = {
      url: this.enviroment.apiUrl + 'create',
      headers: { 'Content-Type': 'application/json' }
    };
  
    const response: HttpResponse = await CapacitorHttp.post(options);
    
    

    
   
  }

  async onSave() {
    console.log(this.user);

    const options = {
      url: this.enviroment.apiUrl + 'create',
      headers: { 'Content-Type': 'application/json' },
      data: this.user
    };
  
    const response: HttpResponse = await CapacitorHttp.post(options);

    window.location.reload();
  }

}
