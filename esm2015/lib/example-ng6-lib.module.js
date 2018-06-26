/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { FooComponent } from './foo/foo.component';
export class ExampleNg6LibModule {
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
function ExampleNg6LibModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ExampleNg6LibModule.prototype.injector;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbmc2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9leGFtcGxlLW5nNi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFZbkQsTUFBTTs7OztJQUNKLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsdUJBQU0sRUFBRSxHQUFHLG1CQUFtQixDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDMUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckMsdUJBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBRUQsYUFBYSxNQUFLOzs7WUFuQm5CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7Z0JBQ3BELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQztnQkFDdkQsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIsWUFBWTtpQkFDYjthQUNGOzs7O1lBZGtCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeGFtcGxlTmc2TGliQ29tcG9uZW50LFxuICAgIEZvb0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChGb29Db21wb25lbnQsIHsgaW5qZWN0b3J9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VubC1mb28nLCBlbCk7XG5cbiAgICBjb25zdCBlbDIgPSBjcmVhdGVDdXN0b21FbGVtZW50KEV4YW1wbGVOZzZMaWJDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbmwtZXhhbXBsZS1uZzYtbGliJywgZWwyKTtcbiAgfVxuXG4gIG5nRG9Cb290U3RyYXAoKSB7fVxufVxuXG5cbi8vIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IH0gZnJvbSAnLi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEZvb0NvbXBvbmVudCB9IGZyb20gJy4vZm9vL2Zvby5jb21wb25lbnQnO1xuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBpbXBvcnRzOiBbXG4vLyAgIF0sXG4vLyAgIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4vLyAgIGV4cG9ydHM6IFtcbi8vICAgICBFeGFtcGxlTmc2TGliQ29tcG9uZW50LFxuLy8gICAgIEZvb0NvbXBvbmVudFxuLy8gICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUgeyB9XG4iXX0=