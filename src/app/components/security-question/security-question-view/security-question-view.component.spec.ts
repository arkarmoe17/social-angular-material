import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionViewComponent } from './security-question-view.component';

describe('SecurityQuestionViewComponent', () => {
  let component: SecurityQuestionViewComponent;
  let fixture: ComponentFixture<SecurityQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQuestionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
