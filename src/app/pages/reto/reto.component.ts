import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { GameBoardComponent } from '../game-board/game-board.component';
import { ScoreBoardComponent } from '../score-board/score-board.component';
import { ControlsPanelComponent } from '../controls-panel/controls-panel.component';
import { Variant1GameBoardComponent } from '../variant1GameBoard/variant1GameBoard.component';
import { Variant2GameBoardComponent } from '../variant2GameBoard/variant2GameBoard.component';

@Component({
  selector: 'app-reto',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GameBoardComponent,
    ScoreBoardComponent,
    Variant1GameBoardComponent,
    Variant2GameBoardComponent,
    ControlsPanelComponent
  ],
  templateUrl: './reto.component.html',
  styleUrl: './reto.component.css',
})
export class RetoComponent implements OnInit {
  retoId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private game: GameService
  ) {}

  ngOnInit() {
    // Detecta cambios en el parámetro :id cada vez que cambia la ruta
   /*  this.route.paramMap.subscribe(params => {
      this.retoId = Number(params.get('id')) || 1;
      switch (this.retoId) {
        case 1: this.game.applyReto1(); break;
        case 2: this.game.applyReto2(); break;
        case 3: this.game.applyReto3(); break;
        case 4: this.game.applyReto4(); break;
        case 5: this.game.applyReto5(); break;
        case 6: this.game.applyReto6(); break;
        case 7: this.game.applyReto7(); break;
        case 8: this.game.applyReto8(); break;
        default: this.router.navigateByUrl('/');
      }
    }); */
  }

nextReto() {
 /*  const maxReto = 11;

  const next = this.retoId + 1 > maxReto ? 1 : this.retoId + 1;

  if (next === 9) {
    this.router.navigate(['/reto/9']);
  } else {
    this.router.navigate(['/reto', next]);
  }
} */

}
}
