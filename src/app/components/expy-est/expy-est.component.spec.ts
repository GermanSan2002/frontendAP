import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPyESTComponent } from './expy-est.component';

describe('EXPyESTComponent', () => {
  let component: EXPyESTComponent;
  let fixture: ComponentFixture<EXPyESTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXPyESTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EXPyESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
