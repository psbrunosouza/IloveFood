import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTemplateComponent } from './header-template.component';

describe('HeaderTemplateComponent', () => {
  let component: HeaderTemplateComponent;
  let fixture: ComponentFixture<HeaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
