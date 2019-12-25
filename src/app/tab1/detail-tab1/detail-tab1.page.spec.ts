import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTab1Page } from './detail-tab1.page';

describe('DetailTab1Page', () => {
  let component: DetailTab1Page;
  let fixture: ComponentFixture<DetailTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
