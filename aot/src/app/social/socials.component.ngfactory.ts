/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './social.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../../src/app/social/socials.component';
import * as import3 from 'ng2-toastr/src/toast-manager';
import * as import4 from '@angular/material';
import * as import5 from '@angular/router';
import * as import6 from '@angular/common';
const styles_SocialsComponent:any[] = [import0.styles];
export const RenderType_SocialsComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_SocialsComponent,
  data: {}
}
);
export function View_SocialsComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),46,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'goldgradient beigeborder subnav'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'subnav-btnleft'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.SocialsComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.goBack()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'fa fa-chevron-left'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',[[
        'style',
        'text-align: center;'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Social'])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),15,'div',[[
        'class',
        'crrt-win phyto-ctnr'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Picture of the Week'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'crrt-wincnt'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'goldgradient crrt-winpic'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'iframe',[
      [
        'allowTransparency',
        'true'
      ]
      ,
      [
        'class',
        'snapwidget-widget'
      ]
      ,
      [
        'frameborder',
        '0'
      ]
      ,
      [
        'scrolling',
        'no'
      ]
      ,
      [
        'src',
        'https://snapwidget.com/embed/384685'
      ]
      ,
      [
        'style',
        'border:none; overflow:hidden; width:100%; height:100%'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵted((null as any),['\n      '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'done'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.SocialsComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.openDialog()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Submit your picture'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),17,'div',[[
        'class',
        'beigeback phyto-ctnr prevwin'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Winners from Previous Weeks'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'prevwin-pics'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'iframe',[
      [
        'allowTransparency',
        'true'
      ]
      ,
      [
        'class',
        'snapwidget-widget'
      ]
      ,
      [
        'frameborder',
        '0'
      ]
      ,
      [
        'scrolling',
        'no'
      ]
      ,
      [
        'src',
        'https://snapwidget.com/embed/380628'
      ]
      ,
      [
        'style',
        'border:none; overflow:hidden; width:100%; height:100%'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),6,'a',[
      [
        'class',
        'phyto-ctnr follow'
      ]
      ,
      [
        'href',
        'https://www.instagram.com/phytousa/'
      ]
      ,
      [
        'target',
        '_blank'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'img',[[
        'src',
        '/assets/images/instagram-icon.png'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Follow @phytousa on Instagram for more updates!'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(null as any),(null as any));
}
function View_SocialsComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-socials',([] as any[]),(null as any),(null as any),(null as any),View_SocialsComponent_0,RenderType_SocialsComponent)),
    import1.ɵdid(57344,(null as any),0,import2.SocialsComponent,[
      import3.ToastsManager,
      import4.MdDialog,
      import5.Router,
      import6.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const SocialsComponentNgFactory:import1.ComponentFactory<import2.SocialsComponent> = import1.ɵccf('app-socials',import2.SocialsComponent,View_SocialsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC9zb2NpYWwvc29jaWFscy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvYWxhbi9hcHAvYWxlcy9zYWxvbi9zcmMvYXBwL3NvY2lhbC9zb2NpYWxzLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC9zb2NpYWwvc29jaWFscy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC9zb2NpYWwvc29jaWFscy5jb21wb25lbnQudHMuU29jaWFsc0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImdvbGRncmFkaWVudCBiZWlnZWJvcmRlciBzdWJuYXZcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwic3VibmF2LWJ0bmxlZnRcIiAoY2xpY2spPVwiZ29CYWNrKClcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5cbiAgICA8aDMgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+U29jaWFsPC9oMz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjcnJ0LXdpbiBwaHl0by1jdG5yXCI+XG4gICAgPGgzPlBpY3R1cmUgb2YgdGhlIFdlZWs8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjcnJ0LXdpbmNudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdvbGRncmFkaWVudCBjcnJ0LXdpbnBpY1wiPlxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vc25hcHdpZGdldC5jb20vZW1iZWQvMzg0Njg1XCIgY2xhc3M9XCJzbmFwd2lkZ2V0LXdpZGdldFwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCIgc3R5bGU9XCJib3JkZXI6bm9uZTsgb3ZlcmZsb3c6aGlkZGVuOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJVwiPjwvaWZyYW1lPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZG9uZVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5TdWJtaXQgeW91ciBwaWN0dXJlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmVpZ2ViYWNrIHBoeXRvLWN0bnIgcHJldndpblwiPlxuICAgIDxoND5XaW5uZXJzIGZyb20gUHJldmlvdXMgV2Vla3M8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2d2luLXBpY3NcIj5cbiAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9zbmFwd2lkZ2V0LmNvbS9lbWJlZC8zODA2MjhcIiBjbGFzcz1cInNuYXB3aWRnZXQtd2lkZ2V0XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBzdHlsZT1cImJvcmRlcjpub25lOyBvdmVyZmxvdzpoaWRkZW47IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlXCI+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGh5dG91c2EvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJwaHl0by1jdG5yIGZvbGxvd1wiPlxuICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0taWNvbi5wbmdcIj5cbiAgICAgIDxwPkZvbGxvdyBAcGh5dG91c2Egb24gSW5zdGFncmFtIGZvciBtb3JlIHVwZGF0ZXMhPC9wPlxuICAgIDwvYT5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIjxhcHAtc29jaWFscz48L2FwcC1zb2NpYWxzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUI7TUFDckI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QztNQUMzQztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQStCO1FBQUE7UUFBQTtNQUFBO01BQS9CO0lBQUE7TUFBa0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQztNQUM3RjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdDO0lBQVc7SUFDdkM7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlDO0lBQy9CO0lBQUk7SUFBd0I7TUFDNUI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtNQUN2QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO0lBQ3BDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUEyTTtJQUN2TTtNQUNOO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBcUI7UUFBQTtRQUFBO01BQUE7TUFBckI7SUFBQTtJQUE0QztJQUE0QjtJQUNwRTtJQUNGO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQztJQUN4QztJQUFJO0lBQWdDO01BQ3BDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMEI7SUFDeEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTJNO0lBQ3ZNO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQXdGO01BQ3RGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNkM7SUFDN0M7SUFBRztJQUFtRDtJQUNwRDtJQUNBO0lBQ0Y7Ozs7OztJQ3hCTjtnQkFBQTs7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
