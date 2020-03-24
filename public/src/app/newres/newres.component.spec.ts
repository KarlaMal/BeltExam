import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewresComponent } from './newres.component';

describe('NewresComponent', () => {
  let component: NewresComponent;
  let fixture: ComponentFixture<NewresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
