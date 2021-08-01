import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordinputComponent } from './keywordinput.component';

describe('KeywordinputComponent', () => {
  let component: KeywordinputComponent;
  let fixture: ComponentFixture<KeywordinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
