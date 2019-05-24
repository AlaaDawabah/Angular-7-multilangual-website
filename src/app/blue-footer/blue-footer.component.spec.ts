import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueFooterComponent } from './blue-footer.component';

describe('BlueFooterComponent', () => {
  let component: BlueFooterComponent;
  let fixture: ComponentFixture<BlueFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
