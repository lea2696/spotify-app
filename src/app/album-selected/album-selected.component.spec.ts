import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSelectedComponent } from './album-selected.component';

describe('AlbumSelectedComponent', () => {
  let component: AlbumSelectedComponent;
  let fixture: ComponentFixture<AlbumSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
