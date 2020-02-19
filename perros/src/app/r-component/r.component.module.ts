import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RAlertaComponent} from '../r-component/r-alerta/r-alerta.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
    ],
    declarations: [
        RAlertaComponent
    ],
    exports: [
        RAlertaComponent
    ],
    entryComponents: [],
})
export class RComponentsModule {

}
