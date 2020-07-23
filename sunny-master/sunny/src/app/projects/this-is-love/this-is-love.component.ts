import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-this-is-love',
  templateUrl: './this-is-love.component.html',
  styleUrls: ['./this-is-love.component.css']
})
export class ThisIsLoveComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('THIS IS LOVE - Sunny Kurapati');
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
