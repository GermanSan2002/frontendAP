import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHysComponent } from './edit-hys.component';

describe('EditHysComponent', () => {
  let component: EditHysComponent;
  let fixture: ComponentFixture<EditHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
