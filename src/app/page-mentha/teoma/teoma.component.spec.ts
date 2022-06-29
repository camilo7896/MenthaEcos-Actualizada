import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeomaComponent } from './teoma.component';

describe('TeomaComponent', () => {
  let component: TeomaComponent;
  let fixture: ComponentFixture<TeomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
