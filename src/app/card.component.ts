import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',  
  styleUrls: ['./card.component.css'],  
  animations: [   
    trigger('dataState', [
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
          style({transform: 'scale(1)', offset: 0.3}),
          style({transform: 'scale(1.1)', offset: 1.0})
        ]))
      ]),      
      transition('active => inactive', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({transform: 'scale(1.1)', offset: 0}),
          style({transform: 'scale(1)', offset: 0.3}),  
          style({transform: 'scale(.8)', offset: 1.0}),                  
        ]))
      ]),      
      transition('active => inactive', animate('100ms ease-out'))
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
    toggleState() {
      this.data.state = (this.data.state === 'active' ? 'inactive' : 'active');
      this.data.active = this.data.state === 'active';
    };
    animationStarted(e){
      console.log(e);
    };
    animationDone(e){
      console.log(e);
    };

}
