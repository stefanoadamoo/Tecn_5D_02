import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianiComponent } from './italiani.component';

describe('ItalianiComponent', () => {
  let component: ItalianiComponent;
  let fixture: ComponentFixture<ItalianiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalianiComponent]
    });
    fixture = TestBed.createComponent(ItalianiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
