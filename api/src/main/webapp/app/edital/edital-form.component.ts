import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditalService } from '../services/edital.service';
import { Edital } from '../models/edital';

@Component({
  selector: 'app-edital-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edital-form.component.html'
})
export class EditalFormComponent implements OnInit {
  edital: Edital = {
    numero: '',
    nome: '',
    dtInscricaoIni: '',
    dtInscricaoFim: '',
    linkConcurso: '',
    status: '',
    dtCadastro: '',
    concursoHtml: '',
    resultadoHomologado: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editalService: EditalService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.editalService.get(id).subscribe({
        next: data => (this.edital = data)
      });
    }
  }

  save(): void {
    if (this.edital.id) {
      this.editalService.update(this.edital.id, this.edital).subscribe({
        next: () => this.router.navigate(['/editais'])
      });
    }
  }
}
