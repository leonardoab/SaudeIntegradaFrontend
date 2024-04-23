import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';





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
    MatCheckboxModule    
    ],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  fichas = [
    { 
      titulo: 'Informações Gerais',
      conteudo: [
        { chave: 'Nome', valor: 'Leonardo Araujo Bezerra' },
        { chave: 'Período', valor: '18/03/2018 - 20/05/2018' },
        // Assumindo que os níveis são booleanos e podem ser todos verdadeiros ou falsos
        { chave: 'Nível I', valor: true },
        { chave: 'Nível II', valor: false },
        { chave: 'Nível III', valor: true },
        { chave: 'Método', valor: 'SS - APS' },
        // Adicionar os novos campos conforme a imagem
        { chave: 'Data Teste Carga', valor: '18/03/2018' },
        { chave: 'Próximo Teste Carga', valor: '20/05/2018' },
        { chave: 'Próxima Avaliação Física', valor: '20/05/2018' },
        // Outras informações que possam ser necessárias
        // ...
      ]
    },
    { 
      titulo: 'Detalhes Adicionais',
      conteudo: [
        { chave: 'Velocidade Execução', valor: 'Média' }, // Valor atualizado conforme a imagem
        { chave: 'Descanso', valor: '1 minuto' },
        { chave: 'Duração', valor: '8 semanas' },
        { chave: 'Objetivo', valor: 'Descrição do Objetivo' } // Campo novo
        // Outros detalhes adicionais que possam ser necessários
        // ...
      ]
    }
  ];
  
}