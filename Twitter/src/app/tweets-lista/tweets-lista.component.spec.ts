import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsListaComponent } from './tweets-lista.component';

describe('TweetsListaComponent', () => {
  let component: TweetsListaComponent;
  let fixture: ComponentFixture<TweetsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetsListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
