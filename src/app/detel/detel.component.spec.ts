import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetelComponent } from './detel.component';

describe('DetelComponent', () => {
  let component: DetelComponent;
  let fixture: ComponentFixture<DetelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
