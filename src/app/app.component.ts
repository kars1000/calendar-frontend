import { Http } from '@angular/http';
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';


import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewDate = new Date();
  events =[]
  refresh: Subject<any> = new Subject();

  constructor(private http: Http) {




  }

  test(name : string) {
    this.http.get('/yo').map(response => response).toPromise().then((response) => {
      console.info(response);
    });
  }


  dayClicked(date: Date, events: CalendarEvent[]): void {


    this.events.push({
      title: 'KARIM',
      start: startOfDay(date),
      end: endOfDay(date),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
