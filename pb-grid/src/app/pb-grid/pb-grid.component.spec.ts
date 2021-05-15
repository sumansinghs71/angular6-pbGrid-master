import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbGridComponent } from './pb-grid.component';

describe('PbGridComponent', () => {
  let component: PbGridComponent;
  let fixture: ComponentFixture<PbGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
