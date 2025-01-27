import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductosComponent } from './registro-productos.component';

describe('RegistroProductosComponent', () => {
  let component: RegistroProductosComponent;
  let fixture: ComponentFixture<RegistroProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
