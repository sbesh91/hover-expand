import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate 
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',  
  styleUrls: ['./card.component.css'],
})
export class Card { 
    @Input()
    data: Object = {};
}
