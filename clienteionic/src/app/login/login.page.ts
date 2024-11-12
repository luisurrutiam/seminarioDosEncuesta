import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonInput, IonItem, IonLabel, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, IonRouterLink, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonFooter, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive,  IonRouterLink, IonRouterOutlet]
})
export class LoginPage implements OnInit {
ingresar() {
throw new Error('Method not implemented.');
}
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }


  ngOnInit() {
  }

}
