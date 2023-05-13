import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHysComponent } from './add-hys.component';

describe('AddHysComponent', () => {
  let component: AddHysComponent;
  let fixture: ComponentFixture<AddHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
