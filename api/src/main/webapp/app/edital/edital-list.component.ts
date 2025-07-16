import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { EditalService } from '../services/edital.service';
import { Edital } from '../models/edital';

@Component({
  selector: 'app-edital-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edital-list.component.html',
  styleUrl: './edital-list.component.scss'
})
export class EditalListComponent implements OnInit {
  editais: Edital[] = [];

  constructor(private editalService: EditalService, private router: Router) {}

  ngOnInit(): void {
    this.editalService.list().subscribe({
      next: data => (this.editais = data)
    });
  }

  edit(id: number): void {
    this.router.navigate(['/editais', id]);
  }

  delete(id: number): void {
    if (confirm('Confirma a exclus\u00e3o?')) {
      this.editalService.delete(id).subscribe({
        next: () => {
          this.editais = this.editais.filter(e => e.id !== id);
        }
      });
    }
  }
}
