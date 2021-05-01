import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgMeta } from 'ngmeta';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CryptosService } from '../core/services/cryptos.service';
import { CryptoNews } from '../shared/models/crypto-news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private _cs: CryptosService, private _ngmeta: NgMeta) {}

  ngOnInit(): void {
    this._ngmeta.setAll({
      title: environment.title,
      description: environment.description,
    });
  }

  get cryptoNews$(): Observable<CryptoNews[]> {
    return this._cs.cryptoNews$;
  }

  // fetch news detail via cryptos API service
  onGoToNewsDetail(newsItem: CryptoNews) {
    console.log("clicked on newsitem", newsItem);
    this._cs.getNewsDetail(newsItem);
  }
}
