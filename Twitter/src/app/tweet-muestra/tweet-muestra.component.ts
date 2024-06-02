import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-muestra',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './tweet-muestra.component.html',
  styleUrls: ['./tweet-muestra.component.css']
})
export class TweetMuestraComponent {
  @Input() tweet: Tweet | null = null;
}
