import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TareasCompletadasPage } from './tareas-completadas.page';

describe('TareasCompletadasPage', () => {
  let component: TareasCompletadasPage;
  let fixture: ComponentFixture<TareasCompletadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasCompletadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TareasCompletadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
