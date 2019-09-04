import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvocatComponent } from './user-avocat.component';

describe('UserAvocatComponent', () => {
  let component: UserAvocatComponent;
  let fixture: ComponentFixture<UserAvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
