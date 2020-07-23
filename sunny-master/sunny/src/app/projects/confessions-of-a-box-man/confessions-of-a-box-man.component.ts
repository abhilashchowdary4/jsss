import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-confessions-of-a-box-man',
  templateUrl: './confessions-of-a-box-man.component.html',
  styleUrls: ['./confessions-of-a-box-man.component.css']
})
export class ConfessionsOfABoxManComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('CONFESSIONS OF A BOX MAN - Sunny Kurapati');
    $('.image-gallery img').click(function () {
      const $src = $(this).attr('src');
      $('.show').fadeIn();
      $('.img-show img').attr('src', $src);
    });

    $('span, .overlay').click(function () {
      $('.show').fadeOut();
    });
  }

}
