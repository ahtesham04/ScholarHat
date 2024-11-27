import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPostComponent } from './dummy-post.component';

describe('DummyPostComponent', () => {
  let component: DummyPostComponent;
  let fixture: ComponentFixture<DummyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
