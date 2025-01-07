import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfilComponent } from './photo-profil.component';

describe('PhotoProfilComponent', () => {
  let component: PhotoProfilComponent;
  let fixture: ComponentFixture<PhotoProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
