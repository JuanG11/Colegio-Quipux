import { ComponentFixture, TestBed } from '@angular/core/testing';

import { borrar } from './borrar.component';

describe('borrar', () => {
  let component: borrar;
  let fixture: ComponentFixture<borrar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [borrar]
    });
    fixture = TestBed.createComponent(borrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
