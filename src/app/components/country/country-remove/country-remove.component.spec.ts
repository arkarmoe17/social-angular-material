import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRemoveComponent } from './country-remove.component';

describe('CountryRemoveComponent', () => {
  let component: CountryRemoveComponent;
  let fixture: ComponentFixture<CountryRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
