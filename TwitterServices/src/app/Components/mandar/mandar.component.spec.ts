import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarComponent } from './mandar.component';

describe('MandarComponent', () => {
  let component: MandarComponent;
  let fixture: ComponentFixture<MandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
