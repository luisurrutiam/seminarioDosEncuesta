import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'encuesta',
    loadComponent: () => import('./encuesta/encuesta.page').then( m => m.EncuestaPage)
  },
  {
    path: 'registrarUsuario',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'listausuarios',
    loadComponent: () => import('./listausuarios/listausuarios.page').then( m => m.ListausuariosPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'institucion',
    loadComponent: () => import('./institucion/institucion.page').then( m => m.InstitucionPage)
  },
  {
    path: 'crearpregunta',
    loadComponent: () => import('./crearpregunta/crearpregunta.page').then( m => m.CrearpreguntaPage)
  },
  {
    path: 'privilegios',
    loadComponent: () => import('./privilegios/privilegios.page').then( m => m.PrivilegiosPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'respuestaencuesta',
    loadComponent: () => import('./respuestaencuesta/respuestaencuesta.page').then( m => m.RespuestaencuestaPage)
  },
 

];
