import { Component,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{

  @Input() public MessageNew:any;
  
   @Output() public Laserlight=new EventEmitter();

    public sendMessage()
    {
      this.Laserlight.emit("Hello From Child");
    }

}
