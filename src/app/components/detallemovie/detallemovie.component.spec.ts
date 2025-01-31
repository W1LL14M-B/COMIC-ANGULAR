import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemovieComponent } from './detallemovie.component';

describe('DetallemovieComponent', () => {
  let component: DetallemovieComponent;
  let fixture: ComponentFixture<DetallemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallemovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
