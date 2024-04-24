import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';  // Import FormsModule here




interface Exercicio {
  numero: number;
  exercicio: string;
  carga: string;
  sets: string;
  repeticoes: string;
}

interface FichaDetalhes {
  titulo: string;
  conteudo: Exercicio[];
}



@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule,
    CommonModule, 
    MatButtonModule, 
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule ,
    MatIconModule,
    FormsModule
      
    ],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent implements OnInit{

  fichaDetalhes: FichaDetalhes[] = [];
  fichas: any = [] = [];

  displayedColumns: string[] = ['numero', 'exercicio', 'carga', 'sets', 'repeticoes', 'acoes'];
  columnHeaders: {[key: string]: string} = {numero: 'Nº', exercicio: 'Exercício', carga: 'Carga', sets: 'Sets', repeticoes: 'Repetições', acoes: 'Ações'};

  
  fichaDataSource: MatTableDataSource<Exercicio>[] = [];

  

  editingIndexes: { [index: string]: boolean } = {};


  constructor() {
    
   }

  ngOnInit(): void { 

    

    this.fichas = [
      { 
        titulo: 'Nome: Leonardo Araujo Bezerra',
        conteudo: [
          { chave: 'Nome', valor: 'Leonardo Araujo Bezerra' },
          { chave: 'Período', valor: '18/03/2018 - 20/05/2018' },               
          { chave: 'Método', valor: 'SS - APS' },        
          { chave: 'Data Teste Carga', valor: '18/03/2018' },
          { chave: 'Próximo Teste Carga', valor: '20/05/2018' },
          { chave: 'Próxima Avaliação Física', valor: '20/05/2018' },
          { chave: 'Velocidade Execução', valor: 'Média' },
          { chave: 'Descanso', valor: '1 minuto' },
          { chave: 'Duração', valor: '8 Semanas' },
          { chave: 'Nivel', valor: 'III' }
          // Outras informações que possam ser necessárias
          // ...
        ]
      }
    ];


    this.fichaDetalhes = [
      {
        titulo: 'Ficha A - Segunda - Perna',
        conteudo: [
          {
            numero: 1,
            exercicio: 'Cadeira Extensora',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 2,
            exercicio: 'Leg Horizontal',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 3,
            exercicio: 'Cadeira Flexora',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 4,
            exercicio: 'Mesa Flexora',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 5,
            exercicio: 'Panturrilha em pé',
            carga: '',
            sets: '4',
            repeticoes: '12'
          }
          // Continuar com os demais exercícios da Ficha A
        ]
      },
      {
        titulo: 'Ficha B - Terça - Peito/Triceps',
        conteudo: [
          {
            numero: 1,
            exercicio: 'Supino Reto Maquina pegada neutra',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 2,
            exercicio: 'Supino Reto Maquina pegada pronada',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 3,
            exercicio: 'Crucifixo no Voador',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 4,
            exercicio: 'Supino Inclinado Maquina',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 5,
            exercicio: 'Triceps Corda',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 6,
            exercicio: 'Triceps Barra',
            carga: '',
            sets: '4',
            repeticoes: '12'
          }
          // Continuar com os demais exercícios da Ficha A
        ]
      },
      {
        titulo: 'Ficha C - Quarta - Costas/Biceps',
        conteudo: [
          {
            numero: 1,
            exercicio: 'Puxador Frontal Barra Reta',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 2,
            exercicio: 'Puxador Frontal Triangulo',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 3,
            exercicio: 'Remada Aparelho Barra Reta',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 4,
            exercicio: 'Remada Aparecelho Triangulo',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 5,
            exercicio: 'Biceps Maquina pegada Neutra',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 6,
            exercicio: 'Biceps Maquina pegada Supinada',
            carga: '',
            sets: '4',
            repeticoes: '12'
          }
          // Continuar com os demais exercícios da Ficha A
        ]
      },
      {
        titulo: 'Ficha D - Quinta - Ombro',
        conteudo: [
          {
            numero: 1,
            exercicio: 'Desenvolvimento Maquina ombro',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 2,
            exercicio: 'Desenvolvimento Maquina articulada',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 3,
            exercicio: 'Elevacao Lateral',
            carga: '',
            sets: '4',
            repeticoes: '12'
          },
          {
            numero: 4,
            exercicio: 'Elevacao Frontal',
            carga: '',
            sets: '4',
            repeticoes: '12'
          }
          // Continuar com os demais exercícios da Ficha A
        ]
      }
      // Se houverem mais fichas, continuar adicionando aqui...
    ];

    this.fichaDetalhes.forEach(ficha => {
      this.fichaDataSource.push(new MatTableDataSource(ficha.conteudo));
    });




   }

   isEditing(fichaIndex: number, exercicioIndex: number): boolean {
    return !!this.editingIndexes[`${fichaIndex}-${exercicioIndex}`];
  }

  

  

  addExercise(fichaIndex: number, newExercicio: Exercicio) {
    
    //const data = this.fichaDetalhes[fichaIndex].conteudo.push(newExercicio);


    const data = this.fichaDataSource[fichaIndex].data;
    data.push(newExercicio);
    this.fichaDataSource[fichaIndex].data = data; // Atualizar a fonte de dados
    
  
  }

  removeExercise(fichaIndex: number, exercicioIndex: number): void {
    const data = this.fichaDataSource[fichaIndex].data;
  data.splice(exercicioIndex, 1);
  this.fichaDataSource[fichaIndex].data = data; // Atualizar a fonte de dados


    
  }


  editExercise(fichaIndex: number, exercicioIndex: number): void {
    this.editingIndexes[`${fichaIndex}-${exercicioIndex}`] = true;
  }

  saveExercise(fichaIndex: number, exercicioIndex: number): void {
    delete this.editingIndexes[`${fichaIndex}-${exercicioIndex}`];
    this.fichaDataSource[fichaIndex].data = [...this.fichaDataSource[fichaIndex].data];
  }

  cancelEdit(fichaIndex: number, exercicioIndex: number): void {
    delete this.editingIndexes[`${fichaIndex}-${exercicioIndex}`];
  }
  
  


  
  
}