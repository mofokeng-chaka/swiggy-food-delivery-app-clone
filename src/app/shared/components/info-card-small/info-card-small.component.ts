import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card-small',
  templateUrl: './info-card-small.component.html',
  styleUrls: ['./info-card-small.component.scss']
})
export class InfoCardSmallComponent implements OnInit {

  @Input() name: string;
  @Input() imgUrl?: string;
  @Input() badge?: string;
  @Input() time?: string;
  @Input() rounded?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  isDefined(val): boolean { return typeof val !== 'undefined'; }
}
