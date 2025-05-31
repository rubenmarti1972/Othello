
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetoComponent } from './pages/reto/reto.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameBoardComponent } from './pages/game-board/game-board.component';


const routes: Routes = [
  { path: '', component: GameBoardComponent },         // tablero normal
  { path: 'reto/:id', component: GameBoardComponent }, // tablero de reto
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
