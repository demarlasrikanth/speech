import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpeechService } from 'ngx-speech';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-cacl',
  templateUrl: './cacl.component.html',
  styleUrls: ['./cacl.component.css']
})
export class CaclComponent implements OnDestroy, OnInit {
  msg = '';
  comment = '';
  context = '';
  subscription = Subscription.EMPTY;
  good: any;
  pizzas: any[] = [
    'Sicilienne'
  ];
  started = false;
  private _destroyed = new Subject<void>();
  text: any[] = [];
conversation: any;
  constructor(public speech: SpeechService) { }

  ngOnInit(): void {
    // this.speech.start();

    // this.speech.context.pipe(
    //   takeUntil(this._destroyed)
    // ).subscribe(context => {
    //   console.log('this is context',context)
    //   this.context = context});
    // this.good = {message: 'Try me!'};
    this.speech.started.pipe(
      takeUntil(this._destroyed)
    ).subscribe(started => {
      this.started = started
    });
    this.speech.message.pipe(
      takeUntil(this._destroyed)
    ).subscribe(msg => {
      this.msg = msg.message
      if (this.msg != '') {
        this.text.push(this.msg)
        console.log(this.text)
        this.conversation=this.text.join(' ')
      }
    });

  }

  ngOnDestroy() {
    //   // this._destroyed.next();
    //   // this._destroyed.complete();
    //   // this.subscription.unsubscribe();
  }
  // toggleVoiceRecognition() {
  //   if (this.started) {
  //     this.speech.stop();
  //     console.log('this is ', this.msg);

  //   } else {
  //     this.speech.start()

  //   }

  // }

  voiceStart() {
    this.speech.start()
  }
  voiceStop() {
    this.speech.stop();
  }
}
