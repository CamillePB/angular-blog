import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarioComponent } from './secundario.component';

describe('SecundarioComponent', () => {
  let component: SecundarioComponent;
  let fixture: ComponentFixture<SecundarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecundarioComponent]
    });
    fixture = TestBed.createComponent(SecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
