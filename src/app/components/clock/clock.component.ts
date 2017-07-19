import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
   selector: 'clock',
   template: `
    <div class="ui grid container" id="content">
      <div class="ui stackable row">
        <div class="ui four wide computer five wide tablet sixteen wide mobile column">
            <span id="time"><time>{{clock | amDateFormat: 'hh:mm:ss A'}}</time></span>
            <span id="date"><time>{{clock | amDateFormat: 'ddd, D MMM YY'}}</time></span>
        </div>
      </div>
    </div>`,
   styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy {
   private subscription: Subscription;
   private clock: any;
   constructor() {
      this.clock = new Date();
   }

   ngOnInit() {
      let timer = TimerObservable.create(0, 1000);
      this.subscription = timer.subscribe(t => {
         this.clock = new Date();
      });

   }

   ngOnDestroy() {}

   updateClock() {
      let currentTime = new Date();
      let currentHours = currentTime.getHours();
      let currentMinutes: any = currentTime.getMinutes();
      let currentSeconds: any = currentTime.getSeconds();

      // Pad the minutes and seconds with leading zeros, if required
      currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
      currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

      // Choose either "AM" or "PM" as appropriate
      let timeOfDay = (currentHours < 12) ? "AM" : "PM";

      // Convert the hours component to 12-hour format if needed
      currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

      // Convert an hours component of "0" to "12"
      currentHours = (currentHours == 0) ? 12 : currentHours;

      // Compose the string for display
      let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
      return currentTimeString;
   }

   getDate() {
      return new Date().toDateString();
   }
}



