import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearLibroPage } from './crear-libro.page';

describe('CrearLibroPage', () => {
  let component: CrearLibroPage;
  let fixture: ComponentFixture<CrearLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
