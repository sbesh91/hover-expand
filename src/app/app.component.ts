import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate 
} from '@angular/core';
import { NgFor, NgClass } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [
    {
      text:`
      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I think the only card she has is the Lorem card. The best taco bowls are made in Trump Tower Grill. I love Hispanics!
      I think the only card she has is the Lorem card. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.
      I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.`,
      active:false,
      state:"void"
    },
    {
      text:`
      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I think the only card she has is the Lorem card. The best taco bowls are made in Trump Tower Grill. I love Hispanics!
      I think the only card she has is the Lorem card. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.
      I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.`,
      active:false,
      state:"void"
    },
    {
      text:`
      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I think the only card she has is the Lorem card. The best taco bowls are made in Trump Tower Grill. I love Hispanics!
      I think the only card she has is the Lorem card. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.
      I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.`,
      active:false,
      state:"void"
    },
    {
      text:`
      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I think the only card she has is the Lorem card. The best taco bowls are made in Trump Tower Grill. I love Hispanics!
      I think the only card she has is the Lorem card. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.
      I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.`,
      active:false,
      state:"void"
    }
  ];
  get any(){
    return this.cards.some((i)=>{
      return i.active;
    });
  }
}
