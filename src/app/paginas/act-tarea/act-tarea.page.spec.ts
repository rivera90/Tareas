import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActTareaPage } from './act-tarea.page';

describe('ActTareaPage', () => {
  let component: ActTareaPage;
  let fixture: ComponentFixture<ActTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
