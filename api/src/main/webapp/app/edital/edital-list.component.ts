import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditalService } from '../services/edital.service';
import { Edital } from '../models/edital';

@Component({
  selector: 'app-edital-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edital-list.component.html',
  styleUrl: './edital-list.component.scss'
})
export class EditalListComponent implements OnInit {
  editais: Edital[] = [];

  constructor(private editalService: EditalService) {}

  ngOnInit(): void {
    this.editalService.list().subscribe({
      next: data => (this.editais = data)
    });
  }
}
