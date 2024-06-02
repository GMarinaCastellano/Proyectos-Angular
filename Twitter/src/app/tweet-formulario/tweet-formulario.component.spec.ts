import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFormularioComponent } from './tweet-formulario.component';

describe('TweetFormularioComponent', () => {
  let component: TweetFormularioComponent;
  let fixture: ComponentFixture<TweetFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
