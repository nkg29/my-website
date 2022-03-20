import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-website';
  howTo = 'https://www.youtube.com/watch?v=LEFzPe9LTzQ';
  iconCred = 'https://th.bing.com/th/id/R.b1087919b1cb15bb754000418bd37c16?rik=q%2bZYIraEQi1J7Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f4c9%2faBK%2f4c9aBKnoi.png&ehk=H8gtcUqmZsbpmvy50ZAa236ZKgWpQLb7VQj7BP7Q6GY%3d&risl=&pid=ImgRaw&r=0'
  useGoogle = 'https://fontsplugin.com/google-fonts-css/#:~:text=How%20To%20Add%20Google%20Fonts%20Using%20CSS%201,free%20resources%20available%20for%20customizing%20your%20website.%20'
  loadingBar = 'https://zoaibkhan.com/blog/how-to-add-loading-spinner-in-angular-with-rxjs/#:~:text=Adding%20the%20loading%20spinner%20to%20our%20Angular%20app,let%E2%80%99s%20add%20the%20necessary%20imports%20in%20our%20app.module.';
  changeSpinnerColor = 'https://www.angularjswiki.com/angular/creating-progress-spinner-in-angular/#step-5-changing-progress-spinner-styles';

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService, private http: HttpClient) {

  }

  fetchUser() {
    this.http.get('https://api.github.com/users/nkg29').subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    setTimeout(function(){ 
    console.log("Ready")
    }, 3000);
    
  }
}