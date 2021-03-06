import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  totalmem: number;
  members: Array<{id: number, nick: string, fname: string, position: string, img: string}> = [];
  constructor(public navCtrl: NavController) {
    this.name = "Team 6";
    this.totalmem = 13;
    this.members.push({id:1,nick:'Bam',fname:'Kontee',position:'Team Leader',img:'assets/img/bam_03.jpg'});
    this.members.push({id:2,nick:'Waan',fname:'Porawee',position:'Planning Manager',img:'assets/img/waan_03.jpg'});
    this.members.push({id:3,nick:'Ti',fname:'Aphisit',position:'Planning',img:'assets/img/ti_03.jpg'});
    this.members.push({id:4,nick:'Muay',fname:'Arphaporn',position:'Planning',img:'assets/img/mauy_03.jpg'});
    this.members.push({id:5,nick:'Nat',fname:'Jesada',position:'Deverlopment Manager',img:'assets/img/nat_03.jpg'});
    this.members.push({id:6,nick:'Bew',fname:'Narongrit',position:'Deverlopment',img:'assets/img/bew_03.jpg'});
    this.members.push({id:7,nick:'Fluke',fname:'Prachaya',position:'Deverlopment',img:'assets/img/fluke_03.jpg'});
    this.members.push({id:8,nick:'Mos',fname:'Nattawut',position:'Quality assurerance Manager',img:'assets/img/mos_03.jpg'});
    this.members.push({id:9,nick:'Nut',fname:'Nuttawan',position:'Quality assurerance',img:'assets/img/nut_03.jpg'});
    this.members.push({id:10,nick:'Teen',fname:'Kasama',position:'Support Manager',img:'assets/img/teen_03.jpg'});
    this.members.push({id:11,nick:'Pipe',fname:'Siwakorn',position:'Support',img:'assets/img/pipe_03.jpg'});
    this.members.push({id:12,nick:'Gell',fname:'Khemjira',position:'Support',img:'assets/img/gell_03.jpg'});
    }

}
