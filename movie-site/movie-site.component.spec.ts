import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSiteComponent } from './movie-site.component';

describe('MovieSiteComponent', () => {
  let component: MovieSiteComponent;
  let fixture: ComponentFixture<MovieSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
