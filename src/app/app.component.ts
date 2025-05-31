// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ControlsPanelComponent } from './pages/controls-panel/controls-panel.component';
import { PlayerTurnIndicatorComponent } from './pages/player-turn-indicator/player-turn-indicator.component';
import { ScoreBoardComponent } from './pages/score-board/score-board.component';
import { MoveHistoryComponent } from './pages/move-history/move-history.component';
import { SettingsComponent } from './pages/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // para que funcione <router-outlet>
    ControlsPanelComponent,
    PlayerTurnIndicatorComponent,
    ScoreBoardComponent,
    MoveHistoryComponent,
    SettingsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Encerrando colores';
  currentYear = new Date().getFullYear();
}

