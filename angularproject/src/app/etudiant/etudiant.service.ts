import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { etudiant } from "./etudiant";


@Injectable({
    providedIn: 'root'
})
export class EtudiantService{
    private apiServerUrl='environment.apiBaseUrl';
    
constructor(private http:HttpClient){}
public getEtudiant(): Observable<etudiant[]> {
    return this.http.get<etudiant[]>('$(this.apiServerUrl}/etudiant/getAllEtudiant');
}
public addEtudiant(Etudiant: etudiant): Observable<etudiant[]> {
    return this.http.post<etudiant[]>('$(this.apiServerUrl}/etudiant/addEtudiant',Etudiant);
}
public updateEtudiant(Etudiant: etudiant): Observable<etudiant[]> {
    return this.http.post<etudiant[]>('$(this.apiServerUrl}/etudiant/updateEtudiant',Etudiant);
}
public deleteEtudiant(id:number): Observable<etudiant[]> {
    return this.http.delete<etudiant[]>('$(this.apiServerUrl}/etudiant/deleteEtudiant/{id}');

}
}