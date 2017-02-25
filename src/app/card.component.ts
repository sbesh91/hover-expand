import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',  
  styleUrls: ['./card.component.css'],  
  animations: [   
    trigger('dataState', [
      state('void', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(.8)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(.8)', offset: 0}),
          
          style({transform: 'scale(1.1)', offset: 1.0})
        ]))
      ]),      
      transition('active => void', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(1.1)', offset: 0}),
          style({transform: 'scale(1)', offset: 1.0})      
        ]))
      ]),
      transition('inactive => void', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(.8)', offset: 0}),
          style({transform: 'scale(1)', offset: 1.0})      
        ]))
      ]),
      transition('void => active', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(1.1)', offset: 1.0})
        ]))
      ]),
      transition('void => inactive', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(.8)', offset: 1.0})
        ]))
      ]), 
      transition('active => inactive', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(1.1)', offset: 0}),          
          style({transform: 'scale(.8)', offset: 1.0}),                  
        ]))
      ]),      
    ])
  ]
})
export class Card { 
    @Input()
    data:{
      text: string,
      active: boolean,
      state: string
    };
    @Input() 
    any: boolean;
    ngOnChanges(changes: SimpleChanges) {            
      if(this.data.state !== "active" && this.any)
      {
        this.data.state = "inactive";
      } else if(!this.any && !this.data.active) {
        this.data.state = "void";
      }
    }
    toggleState(e) {
      this.data.state = (this.data.state === 'active' ? 'void' : 'active');      
      this.data.active = this.data.state === 'active';
    };
    animationStarted(e){
      
    };
    animationDone(e){
      
    };    
}
