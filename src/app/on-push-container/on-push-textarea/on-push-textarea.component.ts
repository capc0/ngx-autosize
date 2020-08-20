import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-on-push-textarea',
    templateUrl: './on-push-textarea.component.html',
    styleUrls: ['./on-push-textarea.component.scss']
})
export class OnPushTextareaComponent implements OnInit {
    @Input() externalText;

    constructor() {
    }

    ngOnInit() {
    }

}
