import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[trigger-modal]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement
    @Input('trigger-modal') modalId:string

    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any) {
        this.el = ref.nativeElement
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal()
        })
    }
}