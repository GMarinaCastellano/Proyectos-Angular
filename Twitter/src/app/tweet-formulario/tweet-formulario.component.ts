import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-formulario',
  templateUrl: './tweet-formulario.component.html',
  styleUrls: ['./tweet-formulario.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TweetFormularioComponent {
  // Declaro los atributos del tweet vacíos
  autor: string = '';
  categoria: string = '';
  texto: string = '';
  // Emito un evento con el tweet para que se reciba en el parent component
  @Output() onTweetCreado = new EventEmitter<Tweet>();

  crearTweet() {
    const nuevoTweet: Tweet = {
      autor: this.autor,
      categoria: this.categoria,
      texto: this.texto
    };

    this.onTweetCreado.emit(nuevoTweet);
    // Dejo los campos en blanco de nuevo
    this.autor = '';
    this.categoria = '';
    this.texto = '';
  }
}
