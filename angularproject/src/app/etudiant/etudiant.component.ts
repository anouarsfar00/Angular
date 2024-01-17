import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { etudiant } from './etudiant';
import { EtudiantService } from './etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  public etudiants: any;
  constructor(private etudiantService: EtudiantService){}
 public getEtudiant(): void{ 

    this.etudiantService.getEtudiant().subscribe(
      (response: etudiant[]) => {this.etudiants= response;},
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}