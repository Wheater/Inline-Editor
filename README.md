# Wheat House Inline Editor
This library is designed spefically for Angular Material projects with plans to remove the Angular Material specification at a future date. Simple wrapper that gives a visual upgrade helpful for form heavy applications or input heavy grids.

## Install

npm install wh-inline-editor

## Sample Usage

### Basic Wrapper

<wh-inline-editor [model]="testForm.get('name').value" elementReference="name">
  <mat-form-field>
    <input matInput formControlName="name" placeholder="Name" id="name" />
  </mat-form-field>
</wh-inline-editor>

### Mat-Select

<wh-inline-editor [model]="form.get('option').value" [matSelect]="select" elementReference="select">
  <mat-form-field>
    <mat-select #select formControlName="option" id="select">
      <mat-option value="A">A</mat-option>
      <mat-option value="B">B</mat-option>
      <mat-option value="C">C</mat-option>
    </mat-select>
  </mat-form-field>
</wh-inline-editor>

### Mat-Datepicker + Pipe

<wh-inline-editor [(model)]="model.date" elementReference="datepickerInput" 
                  [datepicker]="picker" [pipe]="datePipe" pipeArgs="dd/MM/yyyy">
  <mat-form-field>
    <input matInput [matDatepicker]="picker" id="datepickerInput" [(ngModel)]="templateDrivenFormsModel.date" 
           placeholder="Choose a date">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker id="picker"></mat-datepicker>
  </mat-form-field>
</wh-inline-editor>

## Input Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| model | any | The value reference of the input wrapped |
| elementReference | string | Id of input element wrapped |
| classList  | string[] | List of classes to apply to wrapper |
| pipe | Pipe | Optional pipe to apply to span text |
| pipeArgs | any | Pipe options to apply to pipe parameter |
| editEventType | string | 'Click' or 'Double-click' |
| defaultText | string | Default text to appear if wrapper has empty input |
| showEditButton | boolean | Show edit icon while |
| datepicker | MatDatepicker<Date> | Reference to MatDatepicker |
| matSelect | MatSelect | Reference to MatSelect |

## License

MIT
