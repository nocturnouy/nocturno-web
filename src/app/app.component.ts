import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nocturno';
  
  ngOnInit() {
    // ...
    // UPDATE: I was able to get this working again... Enjoy!

    let cursor;
    let a:any | null;


    cursor = document.querySelector('.cursor');
    a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
      let x = e.clientX;
      let y = e.clientY;
    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('click');
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('click')
    });

    a.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    })
  }
  
}


