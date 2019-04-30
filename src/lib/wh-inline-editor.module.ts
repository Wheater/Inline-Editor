import { CommonModule, CurrencyPipe, DatePipe, AsyncPipe, LowerCasePipe, UpperCasePipe, DecimalPipe, JsonPipe, PercentPipe, TitleCasePipe, SlicePipe, KeyValuePipe, I18nPluralPipe, I18nSelectPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { WhInlineEditorComponent } from './wh-inline-editor.component';
import { DynamicPipe } from './dynamic.pipe';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    WhInlineEditorComponent,
    DynamicPipe,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    WhInlineEditorComponent
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    AsyncPipe,
    LowerCasePipe,
    UpperCasePipe,
    DecimalPipe,
    JsonPipe,
    PercentPipe,
    TitleCasePipe,
    SlicePipe,
    KeyValuePipe,
    I18nPluralPipe,
    I18nSelectPipe
  ]
})
export class WhInlineEditorModule { }
