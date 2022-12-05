import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { ArticleModule } from './shared/modules/article/article.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './auth/services/auth.interceptor';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { PersonalFeedModule } from './personal-feed/personal-feed.module';
import { FeedByTagModule } from './feed-by-tag/feed-by-tag.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    AuthModule,
    NavbarModule,
    GlobalFeedModule,
    PersonalFeedModule,
    FeedByTagModule,
    ArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
