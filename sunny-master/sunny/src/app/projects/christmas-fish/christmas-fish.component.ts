import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-christmas-fish',
  templateUrl: './christmas-fish.component.html',
  styleUrls: ['./christmas-fish.component.css']
})
export class ChristmasFishComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('CHRISTMAS FISH - Sunny Kurapati');
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
