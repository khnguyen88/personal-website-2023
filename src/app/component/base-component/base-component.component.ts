// Parent base component used as needed for subscription handling
// Ensures that subscription to observable is completed once component is destroyed
// Source: Learned from work, but similar pattern here - https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription

import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'base-component',
	template: ''
})
export abstract class BaseComponent implements OnDestroy {
  protected componentDestroyed$: Subject<boolean> = new Subject<boolean>();
  
	ngOnDestroy(): void {
		this.componentDestroyed$.next(true);
		this.componentDestroyed$.complete();
	}
}