import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-bw-india',
  templateUrl: './bw-india.component.html',
  styleUrls: ['./bw-india.component.css']
})
export class BwIndiaComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('BW INDIA - Sunny Kurapati');
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
