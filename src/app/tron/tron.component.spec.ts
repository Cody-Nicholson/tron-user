import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TronComponent } from './tron.component';

describe('TronComponent', () => {
  let component: TronComponent;
  let fixture: ComponentFixture<TronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
