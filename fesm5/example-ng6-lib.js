import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleNg6LibService = /** @class */ (function () {
    function ExampleNg6LibService() {
    }
    ExampleNg6LibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ExampleNg6LibService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExampleNg6LibService.ngInjectableDef = defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });
    return ExampleNg6LibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ExampleNg6LibComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var FooComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var ExampleNg6LibModule = /** @class */ (function () {
    function ExampleNg6LibModule() {
    }
    ExampleNg6LibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [ExampleNg6LibComponent, FooComponent],
                    exports: [
                        ExampleNg6LibComponent,
                        FooComponent
                    ]
                },] },
    ];
    return ExampleNg6LibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ExampleNg6LibService, ExampleNg6LibComponent, ExampleNg6LibModule, FooComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZm9vL2Zvby5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZXhhbXBsZS1uZzYtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWV4YW1wbGUtbmc2LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBleGFtcGxlLW5nNi1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWZvbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGZvbyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2Bwe3BhZGRpbmc6OHB4O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjtib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeGFtcGxlTmc2TGliQ29tcG9uZW50LFxuICAgIEZvb0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OytCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQix5Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSx1REFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztpQ0FWRDs7Ozs7OztBQ0FBO0lBWUU7S0FBaUI7Ozs7SUFFakIsK0JBQVE7OztJQUFSO0tBQ0M7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJCQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLCtEQUErRCxDQUFDO2lCQUMxRTs7Ozt1QkFURDs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7b0JBQ3BELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLFlBQVk7cUJBQ2I7aUJBQ0Y7OzhCQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=