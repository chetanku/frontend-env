import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EnvServiceProvider } from "./env.service.provider";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
