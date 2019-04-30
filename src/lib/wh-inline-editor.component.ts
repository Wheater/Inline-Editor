import { Component, Input, Inject, AfterViewInit, ChangeDetectorRef,
         ElementRef, ViewChild, AfterContentInit, ContentChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDatepicker, MatSelect } from '@angular/material';
import { DynamicPipe } from './dynamic.pipe';

@Component({
  selector: 'wh-inline-editor',
  templateUrl: './wh-inline-editor.component.html',
  styleUrls: ['./wh-inline-editor.component.css']
})
export class WhInlineEditorComponent implements AfterViewInit, AfterContentInit {

  editing = false;
  id = 'inlineEditorComponent';
  hovering = false;

  @Input() classList: string[] = null;
  @Input() pipe: any;
  @Input() pipeArgs: [];
  @Input() elementReference = '';
  @Input() matSelect: MatSelect;
  @Input() nativeSelect: HTMLSelectElement;
  @Input() model: any;
  @Input() editEventType = 'click';
  @Input() defaultText = 'Enter a value';
  @Input() showEditButton = true;
  @Input() datepicker: MatDatepicker<Date>;


  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(@Inject(DOCUMENT) private document: any, private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterContentInit() {
    if (this.datepicker) {
      this.datepicker.closedStream.subscribe(() => {
        this.wrapper.nativeElement.querySelector('#' + this.elementReference).focus();
      });
    }
  }

  ngAfterViewInit() {
    if (this.matSelect) {
      this.matSelect.openedChange.subscribe(opened => {
        if (!opened) {
          this.editing = false;
        }
      });
    }

    document.querySelectorAll('.ng-content-container').forEach((element: Element) => {

      element.querySelectorAll('input').forEach((innerElement: Element) => {
        innerElement.addEventListener('blur', () => {
          if (this.datepicker) {
            setTimeout(() => {
                if (!this.datepicker.opened) {
                  this.editing = false;
                }
              }, 200);
          } else {
            this.editing = false;
          }
        });

        innerElement.addEventListener('focusout', () => {
          if (this.datepicker) {
            setTimeout(() => {
                if (!this.datepicker.opened) {
                  this.editing = false;
                }
              }, 200);
          } else {
            this.editing = false;
          }
        });
      });
    });
  }

  clickEvent(clickType: string) {
    if (this.editEventType === clickType) {
      this.editing = true;

      this.changeDetectorRef.detectChanges();

      if (this.matSelect) {
        this.matSelect.open();
        return;
      }

      if (this.wrapper) {
        if (this.datepicker) {
          this.datepicker.open();
          return;
        }

        const elementToFocus = this.wrapper.nativeElement.querySelector('#' + this.elementReference);

        if (elementToFocus) {
          elementToFocus.focus();
        }
      }
    }
  }
}
