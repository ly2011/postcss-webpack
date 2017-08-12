# postcss

## postcss插件

### precss

- precss中的嵌套和Sass或Less中的嵌套一样

- precss声明变量像Sass语法一样

- 存在 `@if` 和 `@else`这样的条件命令

- 存在 `@for` 和 `@each` 两种循环

- 使用 `@define-mixin mixin_name $arg1,$arg2{...}` 语法声明宏

- 使用 `@mixin mixin_name pass_arg1,pass_arg2;` 语法来调用

- `@mixin-content` 类似于Sass中的 `@content`

- 使用 `@define-extend extend_name{...}`来声明可扩展的的代码块

- 使用 `@extend extend_name`来调用扩展代码块

- 使用 `@import` 导入css文件

## ERROR

css中使用 `@import` 一定要在头部使用，否则引用不成功(但是不会报错)

## 参考文档

- [http://www.itnose.net/detail/6646276.html](http://www.itnose.net/detail/6646276.html)
- [https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md)