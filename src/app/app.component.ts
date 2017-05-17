import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maximizing the Efficiency of a Drought-Resistant Water Tank';
  @ViewChild('videoPlayer') videoplayer: any;
  tap1Switch : boolean;
  tap2Switch : boolean;
  tap3Switch : boolean;
  tap1Speed : number = -0.5;
  tap2Speed : number = -0.8;
  tap3Speed : number = -1.5;
  allTapSpeed : number = 0;
  videoSource : string;
  fillSppeds = {
    "-0.5" : "Movie1.mp4",
    "-0.8" : "Movie2.mp4",
    "-1.3" : "Movie3.mp4",
    "-1.5" : "Movie4.mp4",
    "-2" : "Movie5.mp4",
    "-2.3" : "Movie6.mp4",
    "-2.8" : "Movie7.mp4"
  }
  tapClick(){
    this.allTapSpeed = 0;
    if(this.tap1Switch){
      this.allTapSpeed =  this.allTapSpeed + this.tap1Speed; 
    }
    if(this.tap2Switch){
      this.allTapSpeed =  this.allTapSpeed + this.tap2Speed; 
    }
    if(this.tap3Switch){
      this.allTapSpeed =  this.allTapSpeed + this.tap3Speed; 
    }
    if( this.allTapSpeed === -0.5){
      this.videoSource = "Movie1.mp4"
    }else if( this.allTapSpeed === -0.8){
      this.videoSource = "Movie2.mp4"
    }else if( this.allTapSpeed === -1.3){
      this.videoSource = "Movie3.mp4"
    }else if( this.allTapSpeed === -1.5){
      this.videoSource = "Movie4.mp4"
    }else if( this.allTapSpeed === -2){
      this.videoSource = "Movie5.mp4"
    }else if( this.allTapSpeed === -2.3){
      this.videoSource = "Movie6.mp4"
    }else if( this.allTapSpeed === -2.8){
      this.videoSource = "Movie7.mp4"
    }
    if( this.tap1Switch || this.tap2Switch || this.tap3Switch){
       this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    }else{
      this.videoplayer.nativeElement.pause();
    }
   
  }
}
