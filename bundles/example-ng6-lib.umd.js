(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define('example-ng6-lib', ['exports', '@angular/core', '@angular/elements'], factory) :
    (factory((global['example-ng6-lib'] = {}),global.ng.core,global.ng.elements));
}(this, (function (exports,i0,elements) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ExampleNg6LibService = (function () {
        function ExampleNg6LibService() {
        }
        ExampleNg6LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ExampleNg6LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExampleNg6LibService.ngInjectableDef = i0.defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });
        return ExampleNg6LibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ExampleNg6LibComponent = (function () {
        function ExampleNg6LibComponent() {
        }
        /**
         * @return {?}
         */
        ExampleNg6LibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ExampleNg6LibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'enl-example-ng6-lib',
                        template: "\n    <p>\n      example-ng6-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ExampleNg6LibComponent.ctorParameters = function () { return []; };
        return ExampleNg6LibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FooComponent = (function () {
        function FooComponent() {
        }
        /**
         * @return {?}
         */
        FooComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'enl-foo',
                        template: "<p>\n  foo works!\n</p>\n",
                        styles: ["p{padding:8px;background-color:#efefef;border:1px solid #000}"]
                    },] },
        ];
        /** @nocollapse */
        FooComponent.ctorParameters = function () { return []; };
        return FooComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ExampleNg6LibModule = (function () {
        function ExampleNg6LibModule(injector) {
            this.injector = injector;
            var /** @type {?} */ el = elements.createCustomElement(FooComponent, { injector: injector });
            customElements.define('enl-foo', el);
            var /** @type {?} */ el2 = elements.createCustomElement(ExampleNg6LibComponent, { injector: injector });
            customElements.define('enl-example-ng6-lib', el2);
        }
        /**
         * @return {?}
         */
        ExampleNg6LibModule.prototype.ngDoBootStrap = /**
         * @return {?}
         */
            function () { };
        ExampleNg6LibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ExampleNg6LibComponent, FooComponent],
                        entryComponents: [ExampleNg6LibComponent, FooComponent],
                        exports: [
                            FooComponent
                        ]
                    },] },
        ];
        /** @nocollapse */
        ExampleNg6LibModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return ExampleNg6LibModule;
    }());
    // import { NgModule } from '@angular/core';
    // import { ExampleNg6LibComponent } from './example-ng6-lib.component';
    // import { FooComponent } from './foo/foo.component';
    // @NgModule({
    //   imports: [
    //   ],
    //   declarations: [ExampleNg6LibComponent, FooComponent],
    //   exports: [
    //     ExampleNg6LibComponent,
    //     FooComponent
    //   ]
    // })
    // export class ExampleNg6LibModule { }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ExampleNg6LibService = ExampleNg6LibService;
    exports.ExampleNg6LibComponent = ExampleNg6LibComponent;
    exports.ExampleNg6LibModule = ExampleNg6LibModule;
    exports.FooComponent = FooComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXhhbXBsZS1uZzYtbGliL2xpYi9leGFtcGxlLW5nNi1saWIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1uZzYtbGliL2xpYi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2Zvby9mb28uY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1leGFtcGxlLW5nNi1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgZXhhbXBsZS1uZzYtbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1mb28nLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBmb28gd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgcHtwYWRkaW5nOjhweDtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb29Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRm9vQ29tcG9uZW50LCB7IGluamVjdG9yfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbmwtZm9vJywgZWwpO1xuXG4gICAgY29uc3QgZWwyID0gY3JlYXRlQ3VzdG9tRWxlbWVudChFeGFtcGxlTmc2TGliQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW5sLWV4YW1wbGUtbmc2LWxpYicsIGVsMik7XG4gIH1cblxuICBuZ0RvQm9vdFN0cmFwKCkge31cbn1cblxuXG4vLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgRXhhbXBsZU5nNkxpYkNvbXBvbmVudCB9IGZyb20gJy4vZXhhbXBsZS1uZzYtbGliLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBGb29Db21wb25lbnQgfSBmcm9tICcuL2Zvby9mb28uY29tcG9uZW50JztcblxuLy8gQE5nTW9kdWxlKHtcbi8vICAgaW1wb3J0czogW1xuLy8gICBdLFxuLy8gICBkZWNsYXJhdGlvbnM6IFtFeGFtcGxlTmc2TGliQ29tcG9uZW50LCBGb29Db21wb25lbnRdLFxuLy8gICBleHBvcnRzOiBbXG4vLyAgICAgRXhhbXBsZU5nNkxpYkNvbXBvbmVudCxcbi8vICAgICBGb29Db21wb25lbnRcbi8vICAgXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJjcmVhdGVDdXN0b21FbGVtZW50IiwiTmdNb2R1bGUiLCJJbmplY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7bUNBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSx1REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztxQ0FWRDs7Ozs7OztBQ0FBO1FBWUU7U0FBaUI7Ozs7UUFFakIsK0JBQVE7OztZQUFSO2FBQ0M7O29CQWJGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSwyQkFHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQywrREFBK0QsQ0FBQztxQkFDMUU7Ozs7MkJBVEQ7Ozs7Ozs7QUNBQTtRQWVFLDZCQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1lBQ3BDLHFCQUFNLEVBQUUsR0FBR0MsNEJBQW1CLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO1lBQzFELGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXJDLHFCQUFNLEdBQUcsR0FBR0EsNEJBQW1CLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7WUFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDs7OztRQUVELDJDQUFhOzs7WUFBYixlQUFrQjs7b0JBbEJuQkMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQzt3QkFDcEQsZUFBZSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO3dCQUN2RCxPQUFPLEVBQUU7NEJBQ1AsWUFBWTt5QkFDYjtxQkFDRjs7Ozs7d0JBYmtCQyxXQUFROzs7a0NBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=