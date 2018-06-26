import { Injectable, Component, NgModule, Injector, defineInjectable } from '@angular/core';
import { createCustomElement } from '@angular/elements';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleNg6LibService {
    constructor() { }
}
ExampleNg6LibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ExampleNg6LibService.ctorParameters = () => [];
/** @nocollapse */ ExampleNg6LibService.ngInjectableDef = defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleNg6LibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ExampleNg6LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-example-ng6-lib',
                template: `
    <p>
      example-ng6-lib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
ExampleNg6LibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-foo',
                template: `<p>
  foo works!
</p>
`,
                styles: [`p{padding:8px;background-color:#efefef;border:1px solid #000}`]
            },] },
];
/** @nocollapse */
FooComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExampleNg6LibModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        const /** @type {?} */ el = createCustomElement(FooComponent, { injector });
        customElements.define('enl-foo', el);
        const /** @type {?} */ el2 = createCustomElement(ExampleNg6LibComponent, { injector });
        customElements.define('enl-example-ng6-lib', el2);
    }
    /**
     * @return {?}
     */
    ngDoBootStrap() { }
}
ExampleNg6LibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ExampleNg6LibComponent, FooComponent],
                entryComponents: [ExampleNg6LibComponent, FooComponent],
                exports: [
                    ExampleNg6LibComponent,
                    FooComponent
                ]
            },] },
];
/** @nocollapse */
ExampleNg6LibModule.ctorParameters = () => [
    { type: Injector }
];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZm9vL2Zvby5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZXhhbXBsZS1uZzYtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWV4YW1wbGUtbmc2LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBleGFtcGxlLW5nNi1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWZvbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGZvbyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2Bwe3BhZGRpbmc6OHB4O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjtib3JkZXI6MXB4IHNvbGlkICMwMDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEV4YW1wbGVOZzZMaWJDb21wb25lbnQsXG4gICAgRm9vQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KEZvb0NvbXBvbmVudCwgeyBpbmplY3Rvcn0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW5sLWZvbycsIGVsKTtcblxuICAgIGNvbnN0IGVsMiA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VubC1leGFtcGxlLW5nNi1saWInLCBlbDIpO1xuICB9XG5cbiAgbmdEb0Jvb3RTdHJhcCgpIHt9XG59XG5cblxuLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgIGltcG9ydHM6IFtcbi8vICAgXSxcbi8vICAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbi8vICAgZXhwb3J0czogW1xuLy8gICAgIEV4YW1wbGVOZzZMaWJDb21wb25lbnQsXG4vLyAgICAgRm9vQ29tcG9uZW50XG4vLyAgIF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNWRDtJQVlFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Q0FHWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQywrREFBK0QsQ0FBQzthQUMxRTs7Ozs7Ozs7O0FDVEQ7Ozs7SUFnQkUsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyx1QkFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUMxRCxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVyQyx1QkFBTSxHQUFHLEdBQUcsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCxhQUFhLE1BQUs7OztZQW5CbkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUNSO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQztnQkFDcEQsZUFBZSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO2dCQUN2RCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0QixZQUFZO2lCQUNiO2FBQ0Y7Ozs7WUFka0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==