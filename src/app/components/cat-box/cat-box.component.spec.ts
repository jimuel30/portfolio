import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBoxComponent } from './cat-box.component';

describe('CatBoxComponent', () => {
  let component: CatBoxComponent;
  let fixture: ComponentFixture<CatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
