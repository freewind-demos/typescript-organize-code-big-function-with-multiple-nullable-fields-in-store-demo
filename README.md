TypeScript Organize Code Big Function With Multiple Nullable Fields in Store Demo
===========================

这是一个关于如何组织代码的问题。

假设我们有一个store用于存放各种状态值。由于各种状态的不确定性，各值都可以为undefined。
同时有一个大的函数，它需要同时操作很多个状态值，并且只有当所需要的所有状态值不是undefined时，才真正操作。

这里就遇到了如何更好的拆分代码的问题：
怎样才能既处理好状态值的检查，把大的逻辑分散开，同时又避免手动在函数之中传递大量参数?

```
npm install
npm run demo
```

