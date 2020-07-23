import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-katia',
  templateUrl: './katia.component.html',
  styleUrls: ['./katia.component.css']
})
export class KatiaComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('KATIA - Sunny Kurapati');
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
