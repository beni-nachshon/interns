import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternNameComponent } from './intern-name.component';

describe('InternNameComponent', () => {
  let component: InternNameComponent;
  let fixture: ComponentFixture<InternNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
