import { Component, OnInit } from '@angular/core';
import { Note } from '../json/note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
note:string;
notes:Array<Note> = [];
  constructor() { }

  ngOnInit() {
  }

  addNote(){
    this.notes.push({message: this.note})
  }

  changeFirstNote(){
    this.notes[0].message = 'This just got changed !'
  }

  deleteNote(indexOfNoteToDelete:number){
    this.notes.splice(indexOfNoteToDelete,1)
  }

  triggerChangeDetection(){
    
  }

}
