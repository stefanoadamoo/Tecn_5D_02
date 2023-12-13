import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancesiComponent } from './francesi.component';

describe('FrancesiComponent', () => {
  let component: FrancesiComponent;
  let fixture: ComponentFixture<FrancesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrancesiComponent]
    });
    fixture = TestBed.createComponent(FrancesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
