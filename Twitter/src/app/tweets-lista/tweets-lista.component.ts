import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweets-lista',
  templateUrl: './tweets-lista.component.html',
  standalone: true,
  imports: [CommonModule] 
})
export class TweetsListaComponent {
  @Input() tweets: Tweet[] = [];
  @Output() onTweetSelected = new EventEmitter<Tweet>();

  seleccionarTweet(tweet: Tweet) {
    this.onTweetSelected.emit(tweet);
  }
}
