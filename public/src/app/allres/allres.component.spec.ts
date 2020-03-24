import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllresComponent } from './allres.component';

describe('AllresComponent', () => {
  let component: AllresComponent;
  let fixture: ComponentFixture<AllresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
