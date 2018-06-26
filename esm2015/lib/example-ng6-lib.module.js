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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4YW1wbGUtbmc2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9leGFtcGxlLW5nNi1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFXbkQsTUFBTTs7OztJQUNKLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsdUJBQU0sRUFBRSxHQUFHLG1CQUFtQixDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDMUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckMsdUJBQU0sR0FBRyxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBRUQsYUFBYSxNQUFLOzs7WUFsQm5CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7Z0JBQ3BELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQztnQkFDdkQsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRjs7OztZQWJrQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgRXhhbXBsZU5nNkxpYkNvbXBvbmVudCB9IGZyb20gJy4vZXhhbXBsZS1uZzYtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb29Db21wb25lbnQgfSBmcm9tICcuL2Zvby9mb28uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtFeGFtcGxlTmc2TGliQ29tcG9uZW50LCBGb29Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtFeGFtcGxlTmc2TGliQ29tcG9uZW50LCBGb29Db21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgRm9vQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KEZvb0NvbXBvbmVudCwgeyBpbmplY3Rvcn0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZW5sLWZvbycsIGVsKTtcblxuICAgIGNvbnN0IGVsMiA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VubC1leGFtcGxlLW5nNi1saWInLCBlbDIpO1xuICB9XG5cbiAgbmdEb0Jvb3RTdHJhcCgpIHt9XG59XG5cblxuLy8gaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbi8vIEBOZ01vZHVsZSh7XG4vLyAgIGltcG9ydHM6IFtcbi8vICAgXSxcbi8vICAgZGVjbGFyYXRpb25zOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XSxcbi8vICAgZXhwb3J0czogW1xuLy8gICAgIEV4YW1wbGVOZzZMaWJDb21wb25lbnQsXG4vLyAgICAgRm9vQ29tcG9uZW50XG4vLyAgIF1cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgRXhhbXBsZU5nNkxpYk1vZHVsZSB7IH1cbiJdfQ==