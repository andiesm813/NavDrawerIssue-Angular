import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxDatePickerModule, IgxInputGroupModule, IgxSimpleComboModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { ChildViewComponent } from './child-view.component';

describe('ChildViewComponent', () => {
  let component: ChildViewComponent;
  let fixture: ComponentFixture<ChildViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxDatePickerModule, IgxInputGroupModule, IgxSimpleComboModule, IgxSelectModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
