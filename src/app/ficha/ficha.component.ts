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
    MatIconModule
      
    ],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['numero', 'exercicio', 'carga', 'sets', 'repeticoes', 'remover'];

  fichas = [
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

  fichaDetalhes: FichaDetalhes[] = [
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

  addExercise(fichaIndex: number, newExercicio: Exercicio) {
    this.fichaDetalhes[fichaIndex].conteudo.push(newExercicio);
  }

  removeExercise(fichaIndex: number, exercicioIndex: number): void {
    if (
      fichaIndex < 0 ||
      fichaIndex >= this.fichaDetalhes.length ||
      exercicioIndex < 0 ||
      exercicioIndex >= this.fichaDetalhes[fichaIndex].conteudo.length
    ) {
      console.error('Índices fornecidos estão fora dos limites.');
      return;
    }
  
    this.fichaDetalhes[fichaIndex].conteudo.splice(exercicioIndex, 1);
  }
  

  
  
  


  
  
}