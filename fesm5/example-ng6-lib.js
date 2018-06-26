import { Injectable, Component, NgModule, Injector, defineInjectable } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
    function ExampleNg6LibModule(injector) {
        this.injector = injector;
        var /** @type {?} */ el = createCustomElement(FooComponent, { injector: injector });
        customElements.define('enl-foo', el);
        var /** @type {?} */ el2 = createCustomElement(ExampleNg6LibComponent, { injector: injector });
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
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [ExampleNg6LibComponent, FooComponent],
                    entryComponents: [ExampleNg6LibComponent, FooComponent],
                    exports: [
                        FooComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    ExampleNg6LibModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
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

export { ExampleNg6LibService, ExampleNg6LibComponent, ExampleNg6LibModule, FooComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZm9vL2Zvby5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZXhhbXBsZS1uZzYtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWV4YW1wbGUtbmc2LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBleGFtcGxlLW5nNi1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWZvbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGZvbyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2Bwe3BhZGRpbmc6OHB4O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjtib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEZvb0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChGb29Db21wb25lbnQsIHsgaW5qZWN0b3J9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VubC1mb28nLCBlbCk7XG5cbiAgICBjb25zdCBlbDIgPSBjcmVhdGVDdXN0b21FbGVtZW50KEV4YW1wbGVOZzZMaWJDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbmwtZXhhbXBsZS1uZzYtbGliJywgZWwyKTtcbiAgfVxuXG4gIG5nRG9Cb290U3RyYXAoKSB7fVxufVxuXG5cbi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbXG4vLyAgIF0sXG4vLyAgIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4vLyAgIGV4cG9ydHM6IFtcbi8vICAgICBFeGFtcGxlTmc2TGliQ29tcG9uZW50LFxuLy8gICAgIEZvb0NvbXBvbmVudFxuLy8gICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsrQkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIseUNBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsdURBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7aUNBVkQ7Ozs7Ozs7QUNBQTtJQVlFO0tBQWlCOzs7O0lBRWpCLCtCQUFROzs7SUFBUjtLQUNDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwyQkFHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywrREFBK0QsQ0FBQztpQkFDMUU7Ozs7dUJBVEQ7Ozs7Ozs7QUNBQTtJQWVFLDZCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLHFCQUFNLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBQyxDQUFDLENBQUM7UUFDMUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckMscUJBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCwyQ0FBYTs7O0lBQWIsZUFBa0I7O2dCQWxCbkIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQztvQkFDcEQsZUFBZSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO29CQUN2RCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7OztnQkFia0IsUUFBUTs7OEJBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9