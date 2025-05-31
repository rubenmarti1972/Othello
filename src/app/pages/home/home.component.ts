// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';
import { PlayerTurnIndicatorComponent } from '../player-turn-indicator/player-turn-indicator.component';
import { ScoreBoardComponent } from '../score-board/score-board.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { MoveHistoryComponent } from '../move-history/move-history.component';
import { SettingsComponent } from '../settings/settings.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ControlsPanelComponent,
    PlayerTurnIndicatorComponent,
    ScoreBoardComponent,
    GameBoardComponent,
    MoveHistoryComponent,
    SettingsComponent
  ],
  template: `
    <app-controls-panel></app-controls-panel>
    <app-player-turn-indicator></app-player-turn-indicator>
    <div class="game-area">
      <app-score-board></app-score-board>
      <app-game-board></app-game-board>
    </div>
    <app-move-history></app-move-history>
    <app-settings></app-settings>
  `
})
export class HomeComponent implements OnInit {
  constructor(private game: GameService) {}

  ngOnInit(): void {
    this.game.applyInicio(); // ← Aquí se asegura el tablero 4x4
  }
}
