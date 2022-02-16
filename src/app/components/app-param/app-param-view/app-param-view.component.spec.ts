import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParamViewComponent } from './app-param-view.component';

describe('AppParamViewComponent', () => {
  let component: AppParamViewComponent;
  let fixture: ComponentFixture<AppParamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppParamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppParamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
