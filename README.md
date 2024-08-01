# Angular Signals: A New Way to Think About Reactivity

## Introduction

### What are Signals?

Imagine a value that can 'talk' to other parts of your application when it changes. That's essentially what a Signal is. It's a reactive primitive that simplifies how you manage and react to data changes in your Angular applications.

### Why Signals?

Angular has traditionally relied on Change Detection for updating the view based on data changes. While effective, it can sometimes lead to performance overhead. Signals offer a more granular and efficient approach by directly tracking dependencies and optimizing updates.

## Understanding Signals

#### Creating a Signal:

```typescript
import { signal } from "@angular/core";

const count = signal(0);
```

#### Reading Signal:

```typescript
const currentCount = count();
```

#### Updating a Signal:

```typescript
count.set(2);
// or
count.update((count) => count + 1);
```

## Signals and Dependency Tracking

Signals automatically track their dependencies. When a Signal's value changes, any components or functions that depend on it are automatically updated. This eliminates the need for manual change detection and improves performance.

Example:

```typescript
import { signal, computed } from "@angular/core";

const name = signal<string>("John Doe");
const greeting = computed(() => `Hello, ${name()}`);
```

In this example, greeting is a computed Signal that depends on name. Whenever name changes, greeting will automatically update.

## Template Binding:

Signals can be used directly in templates using the () syntax. This provides a clean and declarative way to render data based on Signal values.

## Model, Input, and Output Signals
Angular Signals introduce new ways to manage component inputs, outputs, and two-way binding.

- **Model Signal** : Used for two-way binding between a component and its template.
```typescript
import { Component, model } from '@angular/core';

@Component({
  // ...
})
export class MyComponent {
  name = model('John Doe');
}
```
- **Input Signal** : Replaces the @Input() decorator for receiving data from parent components.
```typescript
import { Component, input } from '@angular/core';

@Component({
  // ...
})
export class MyComponent {
  title = input<string>('Default Title');
}
```
- **Output Signal** : Replaces the @Output() decorator for emitting events.
```typescript
import { Component, output } from '@angular/core';

@Component({
  // ...
})
export class MyComponent {
  clicked = output<void>();

  handleClick() {
    this.clicked.emit();
  }
}
```

## RxJS Interop
Signals can interact with RxJS observables and subjects.
- Converting Signal to Observable:
```typescript
import { fromSignal } from '@angular/core';

const count$ = fromSignal(count);
```

- Converting Observable to Signal:
```typescript
import { toSignal } from '@angular/core';

const count$ = new BehaviorSubject(0);
const count = toSignal(count$);
```

## Performance Benefits

- Granular Updates: Signals only trigger updates for components that directly depend on changed data.
- Reduced Change Detection: Fewer change detection cycles lead to improved performance.
- Efficient Dependency Tracking: Angular automatically manages dependencies, reducing development overhead.

### Additional Features

- Computed Signals: Create derived values based on other Signals.
- Effect Functions: Perform side effects when Signal values change.
- Promises and Observables Integration: Seamlessly work with existing asynchronous patterns.
