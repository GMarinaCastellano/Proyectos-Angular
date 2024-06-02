import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetMuestraComponent } from './tweet-muestra.component';

describe('TweetMuestraComponent', () => {
  let component: TweetMuestraComponent;
  let fixture: ComponentFixture<TweetMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetMuestraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
