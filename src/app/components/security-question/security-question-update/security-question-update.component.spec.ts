import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionUpdateComponent } from './security-question-update.component';

describe('SecurityQuestionUpdateComponent', () => {
  let component: SecurityQuestionUpdateComponent;
  let fixture: ComponentFixture<SecurityQuestionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQuestionUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
