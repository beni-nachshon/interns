import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorRegisterComponent } from './supervisor-register.component';

describe('SupervisorRegisterComponent', () => {
  let component: SupervisorRegisterComponent;
  let fixture: ComponentFixture<SupervisorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
