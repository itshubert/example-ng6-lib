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
}
ExampleNg6LibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ExampleNg6LibComponent, FooComponent],
                entryComponents: [ExampleNg6LibComponent, FooComponent]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbmc2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9leGFtcGxlLW5nNi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRbkQsTUFBTTs7OztJQUNKLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsdUJBQU0sRUFBRSxHQUFHLG1CQUFtQixDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDMUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckMsdUJBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25EOzs7WUFiRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO2dCQUNwRCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7YUFDeEQ7Ozs7WUFWa0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRm9vQ29tcG9uZW50LCB7IGluamVjdG9yfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbmwtZm9vJywgZWwpO1xuXG4gICAgY29uc3QgZWwyID0gY3JlYXRlQ3VzdG9tRWxlbWVudChFeGFtcGxlTmc2TGliQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW5sLWV4YW1wbGUtbmc2LWxpYicsIGVsMik7XG4gIH1cbn1cbiJdfQ==