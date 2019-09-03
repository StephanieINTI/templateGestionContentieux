import { Component, OnInit, ViewChild, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Tache } from 'src/app/model/tache';
import { TacheService } from 'src/app/service/tache.service';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Subject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfMonth,
  startOfWeek,
  format
} from 'date-fns';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


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

interface ITache{
idTache: number;
dateCreation: Date;
titre: string;

}

@Component({
  selector: 'app-tables',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  taches:any[]
  tache: Tache = new Tache(); 


  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  events$: Observable<Array<CalendarEvent<{ itache: ITache }>>>;

  modalData: {
    action: string;
    event: CalendarEvent;
  };


  

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent  }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

 events:Array<CalendarEvent<{ itache: ITache }>>;
 /* events: CalendarEvent[] = [
   {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },*/
   
    /*{
      start: startOfDay(new Date(2019, 9, 6)),
      title: 'An event with no end date',
      color: colors.yellow,
      //actions: this.actions
    },*/
  /*  {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];*/

  activeDayIsOpen: boolean = false;


  
  constructor(private http: HttpClient,private modal: NgbModal,private tacheService: TacheService) {}

  ngOnInit():void {
    this.fetchEvents();
  }

  

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];
    
  const params = new HttpParams()
  .set(
    'dateCreation.gte',
    format(getStart(this.viewDate), 'yyyy-MM-dd')
  );

   this.events$ = this.http
     .get('http://localhost:9090/gestionContentieux/tache', {params})  
     .pipe(
      map(({ results }: { results: ITache[] }) => {
        return results.map((itache: ITache) => {
          return {
            title: itache.titre,
            start: new Date(
              itache.dateCreation 
            ),
            color: colors.yellow,
            allDay: true,
              itache
            
          };
        });
      })
    );

    
  }

  /*loadEvents() {
    this.asyncEvents$ = this.http.get('http://localhost:9090/gestionContentieux/tache') 
      .map(res => { 
        return res.map(event => { 
          return {
              title: event.label,
              start: new Date(event.startDate),
              color: {primary: event.color, secondary: "#D1E8FF"},
              meta: {
                event
              },
              allDay: true
            };
        });
      });
  }*/

  createTache(){
    this.tacheService.saveTache(this.tache).subscribe(
      () => {/*this.loadTache();*/this.tache= new Tache();}, 
      // demande la mise à jour après l'ajout d'une Tache
      // this.tache= new Tache(); On rafraichit le formulaire
      error => {console.log(error);}
    )
    }


   dayClicked({ date, events }: { date: Date;  events:Array<CalendarEvent<{ itache: ITache }>>  }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
        this.viewDate = date;
      }
    }
  
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      this.events = this.events.map(iEvent => {
        if (iEvent === event) {
          return {
            ...event,
            start: newStart,
            end: newEnd
          };
        }
        return iEvent;
      });
      this.handleEvent('Dropped or resized', event);
    }
  
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  
    addEvent(): void {
      this.events = [
        ...this.events,
        {
          title: 'New event',
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        }
      ];
    }
  
    deleteEvent(eventToDelete: CalendarEvent) {
      this.events = this.events.filter(event => event !== eventToDelete);
    }
  
    setView(view: CalendarView) {
      this.view = view;
    }
  
    closeOpenMonthViewDay() {
      this.activeDayIsOpen = false;
    }

}
