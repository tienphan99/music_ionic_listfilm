import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTab3Page } from './detail-tab3.page';

describe('DetailTab3Page', () => {
  let component: DetailTab3Page;
  let fixture: ComponentFixture<DetailTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
