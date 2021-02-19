import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberAddPage } from './member-add.page';

describe('MemberAddPage', () => {
  let component: MemberAddPage;
  let fixture: ComponentFixture<MemberAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
