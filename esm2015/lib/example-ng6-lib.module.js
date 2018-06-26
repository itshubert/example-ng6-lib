/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
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
                imports: [
                    BrowserModule
                ],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbmc2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9leGFtcGxlLW5nNi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBU25ELE1BQU07Ozs7SUFDSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLHVCQUFNLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzFELGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLHVCQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRDs7OztJQUVELGFBQWEsTUFBSzs7O1lBaEJuQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO2dCQUNwRCxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7YUFDeEQ7Ozs7WUFYa0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KEZvb0NvbXBvbmVudCwgeyBpbmplY3Rvcn0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW5sLWZvbycsIGVsKTtcblxuICAgIGNvbnN0IGVsMiA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VubC1leGFtcGxlLW5nNi1saWInLCBlbDIpO1xuICB9XG5cbiAgbmdEb0Jvb3RTdHJhcCgpIHt9XG59XG5cblxuLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgIGltcG9ydHM6IFtcbi8vICAgXSxcbi8vICAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbi8vICAgZXhwb3J0czogW1xuLy8gICAgIEV4YW1wbGVOZzZMaWJDb21wb25lbnQsXG4vLyAgICAgRm9vQ29tcG9uZW50XG4vLyAgIF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7IH1cbiJdfQ==