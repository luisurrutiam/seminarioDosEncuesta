import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, person, personAddOutline, personSharp, homeOutline, homeSharp, personAddSharp, bookOutline, bookSharp, helpCircleOutline, helpCircleSharp, schoolOutline, schoolSharp, peopleOutline, peopleSharp, people, chevronBack, chevronBackOutline, chevronBackSharp, logIn, logInOutline, logInSharp, logOut, logOutOutline, logOutSharp, idCard, idCardOutline, idCardSharp, starHalf, starHalfOutline, starHalfSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonButtons, IonTitle, IonToolbar, IonHeader, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/login', icon: 'log-in' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Usuarios', url: '/listausuarios', icon: 'people' },
    { title: 'Registrar Usuario', url: '/registrarUsuario', icon: 'person-add' },
    { title: 'Privilegios', url: '/privilegios', icon: 'star-half' },
    { title: 'Perfil', url: '/perfil', icon: 'id-card' },
    { title: 'Crear Encuesta', url: '/encuesta', icon: 'book' },
    { title: 'Crear Preguntas', url: '/crearpregunta', icon: 'help-circle' },
    { title: 'Institucion', url: '/institucion', icon: 'school' },
    
  ];
  
  constructor() {
    addIcons({ mailOutline, mailSharp, personAddSharp, personAddOutline, personSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, schoolOutline, schoolSharp, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeOutline, homeSharp, bookOutline, helpCircleOutline, helpCircleSharp, bookSharp, peopleOutline, peopleSharp, people, chevronBack, chevronBackOutline, chevronBackSharp, logIn, logInOutline, logInSharp, logOut, logOutOutline, logOutSharp, idCard, idCardOutline, idCardSharp, starHalf, starHalfOutline, starHalfSharp});
  }
}
