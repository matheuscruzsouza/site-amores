import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestaDoQueijoComponent } from './festa-do-queijo.component';

describe('FestaDoQueijoComponent', () => {
  let component: FestaDoQueijoComponent;
  let fixture: ComponentFixture<FestaDoQueijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestaDoQueijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestaDoQueijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
