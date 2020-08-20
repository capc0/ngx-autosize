import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-on-push-container',
    templateUrl: './on-push-container.component.html',
    styleUrls: ['./on-push-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushContainerComponent implements OnInit {

    public onPushText = `
1
2
3
4
5
6
7
`;
    constructor() {
    }

    ngOnInit() {
    }

}
