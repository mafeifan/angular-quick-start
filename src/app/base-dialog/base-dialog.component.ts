import { Component, OnInit, Input, forwardRef, ViewEncapsulation, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/* tslint:disable */

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseDialogComponent),
      multi: true,
    }
  ]
})
export class BaseDialogComponent implements OnInit, ControlValueAccessor {
  @Input() dialogTitle = '';
  /*
   * 主题色 white | black
   * */
  @Input() theme = 'white';
  /*
   * 位置 middle | bottom
   * */
  @Input() position = 'middle';
  /*
   * 是否显示遮罩层
   * */
  @Input() showModal = true;

  /*
   * dialog size small | middle | large
   * */
  @Input() size = 'middle';
  /*
   * 显示/隐藏
   * */
  _visible = false;

  constructor() {
  }

  ngOnInit() {
  }

  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.onChangeCallback(this._visible);
  }

  writeValue(val: boolean) {
    this.visible = val;
  }

  onChangeCallback(val) {
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  onTouchCallback() {
  }

  registerOnTouched(fn: any) {
    this.onTouchCallback = fn;
  }
}
