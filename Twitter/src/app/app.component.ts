import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterOutlet } from '@angular/router';
import { TweetsListaComponent } from "./tweets-lista/tweets-lista.component";
import { TweetFormularioComponent } from "./tweet-formulario/tweet-formulario.component";
import { TweetMuestraComponent } from "./tweet-muestra/tweet-muestra.component";
import { Tweet } from './tweet';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule, 
    RouterOutlet,
    TweetsListaComponent,
    TweetFormularioComponent,
    TweetMuestraComponent
  ]
})
export class AppComponent {
  // Array para almacenar los tweets
  tweets: Tweet[] = [];
  // Tweet seleccionado
  selectedTweet: Tweet | null = null;

  addTweet(newTweet: Tweet) {
    this.tweets.push(newTweet);
  }
}
