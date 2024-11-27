import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
  @Input() note: string;
  @Input() noteIndex: number;
  @Output() deleteNote: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    console.log(
      `%c NoteListComponent::constructor: Called on
     Component/Directive instantiation by Angular: ${this.note} `,
      "color:white; background-color:black;"
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `%c NoteListComponent::ngOnChanges: Called on
     every @Input property change ${this.note} ${JSON.stringify(changes)} `,
      "color:blue;"
    )
  }

  ngOnInit() {
    console.log(
      `%c ngOnInit::Called after first
      ngOnChanges ${this.note}`, "color:green"
    )
  }

  handleDeleteClick() {
    this.deleteNote.emit(this.noteIndex);
  }

}
