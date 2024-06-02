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
  autor: string = '';
  categoria: string = '';
  texto: string = '';

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
