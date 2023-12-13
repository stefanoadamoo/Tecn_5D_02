import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagnoliComponent } from './spagnoli.component';

describe('SpagnoliComponent', () => {
  let component: SpagnoliComponent;
  let fixture: ComponentFixture<SpagnoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpagnoliComponent]
    });
    fixture = TestBed.createComponent(SpagnoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
