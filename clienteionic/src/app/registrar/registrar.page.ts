import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validator, FormBuilder,
ReactiveFormsModule,  FormsModule, Validators} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, IonItem, IonButton, IonLabel, IonText, IonInputPasswordToggle, IonMenuButton } from '@ionic/angular/standalone';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonText, IonFooter, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInputPasswordToggle, IonMenuButton]
})
export class RegistrarPage implements OnInit {
  
  private enviroment = environment; 

  public user: any = [];

  usuarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.usuarioForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estado: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  async ngOnInit() {
    const options = {
      url: this.enviroment.apiUrl + 'create',
      headers: { 'Content-Type': 'application/json' }
    };
  
    const response: HttpResponse = await CapacitorHttp.post(options);
    
    console.log("Hola luis formulario"+ this.usuarioForm);

    //response.data = this.user;
   
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      console.log('Formulario válido:', this.usuarioForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
