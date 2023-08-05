import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeComponent } from './mfe.component';

describe('MfeComponent', () => {
  let component: MfeComponent;
  let fixture: ComponentFixture<MfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
