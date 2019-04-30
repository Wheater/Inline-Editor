import { DynamicPipe } from './dynamic.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WhInlineEditorComponent } from './wh-inline-editor.component';
import { AngularMaterialModule } from './angular-material.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WhInlineEditorComponent', () => {
  let component: WhInlineEditorComponent;
  let fixture: ComponentFixture<WhInlineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhInlineEditorComponent, DynamicPipe ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhInlineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be editing when click type matches event type', () => {
    component.elementReference = 'name';

    component.editEventType = 'click';
    component.clickEvent('click');
    expect(component.editing).toBe(true, 'Is editing');
  });

  it('should not be editing when click type does not match event type', () => {
    component.elementReference = 'name';

    component.editEventType = 'double-click';
    component.clickEvent('click');
    expect(component.editing).toBe(false, 'Is editing');
  });

  it('should display ng-content-container when editing', () => {
    component.elementReference = 'name';
    component.editing = true;

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement;
    expect(debugElement.querySelector('.ng-content-container').hidden).toBe(false);
  });

  it('should not display ng-content-container when not editing', () => {
    component.elementReference = 'name';
    component.editing = false;

    const debugElement = fixture.debugElement.nativeElement;
    expect(debugElement.querySelector('.ng-content-container').hidden).toBe(true);
  });
});
