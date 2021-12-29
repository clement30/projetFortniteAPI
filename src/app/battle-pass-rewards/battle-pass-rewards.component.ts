import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-battle-pass-rewards',
  templateUrl: './battle-pass-rewards.component.html',
  styleUrls: ['./battle-pass-rewards.component.css']
})
export class BattlePassRewardsComponent implements OnInit {

  response: any;
  responseItemBattlePass: any;
  langage: string ="fr";
  texte :string ="Voici tous les idems à l'achat aujourd'hui";

  constructor(private http: HttpClient) { }

  ngOnInit() {

      var header = {
        headers: new HttpHeaders()
          .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
      }

      this.http.get(" https://fortniteapi.io/v2/battlepass?lang="+this.langage +"&season=current", header)
      .subscribe((response) => {
        this.responseItemBattlePass = response;
        console.log(this.responseItemBattlePass);
      })
}

sendApi(): void{
  var header = {
    headers: new HttpHeaders()
      .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
  }

  this.http.get(" https://fortniteapi.io/v2/battlepass?lang="+this.langage +"&season=current", header)
  .subscribe((response) => {
    this.responseItemBattlePass = response;
    console.log(this.responseItemBattlePass);
  })
}

sendLangageFR(): void {
      this.langage="fr";
      console.log(this.langage);
      this.sendApi();
    }
sendLangageEN(): void {
      this.langage="en";
      console.log(this.langage);
      this.sendApi();
    }
sendLangageAR(): void {
      this.langage="ar";
      console.log(this.langage);
      this.sendApi();
    }
sendLangageIT(): void {
      this.langage="it";
      console.log(this.langage);
      this.sendApi();
    }
sendLangageES(): void {
      this.langage="es";
      console.log(this.langage);
      this.sendApi();
    }
sendLangageCH(): void {
      this.langage="zh-CN";
      console.log(this.langage);
      this.sendApi();
    }
}
