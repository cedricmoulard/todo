import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
