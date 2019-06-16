# vue-draggable-list

## Vue拖拽组件列表实现动态页面配置

### 需求描述

最近在做一个后台系统，有一个功能产品需求是页面分为左右两部分，通过右边的组件列表来动态配置左边的页面视图，并且左边由组件拼装起来的视图，可以实现上下拖拽改变顺序，也可以删除。

根据这个需求我做了下面这个demo。



### 功能分解

- 右边的组件列表，可以通过拖拽克隆到左边，拖拽结束后右边组件列表数量不会减少
- 左边的组件可以展开或收起
- 左边的组件可以上下拖拽，删除，但不可向右边拖拽
- 左边组件拖拽过程中不改变其展开和收起状态



### demo截图

![Image text](https://raw.githubusercontent.com/dora-zc/vue-draggable-list/master/src/assets/preview.png)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
