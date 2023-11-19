# mini-react

手写 React18 系列，源码参照卡颂老师的《React 设计原理》。

## React 项目结构

- react：宿主环境无关的公用方法；
- react-reconciler：协调器的实现，宿主环境无关，具体介绍见👇🏻；
- 各种宿主环境的包；
- shared：公用辅助方法，宿主环境无关。

`react-reconciler` 是 React 中的一个核心模块，负责协调（Reconciliation）React 应用程序中虚拟 DOM 树的更新过程。React Reconciler 是 React 核心算法的实现，它定义了如何有效地处理组件的更新、渲染和协调。

具体来说，React Reconciler 主要包括以下几个方面的功能：

协调更新： React Reconciler 负责处理组件状态的变化，并决定如何高效地更新虚拟 DOM 树，以保持 UI 与应用状态的同步。

构建虚拟 DOM： 在组件渲染过程中，React Reconciler 负责构建虚拟 DOM 树。虚拟 DOM 是一个轻量级的表示真实 DOM 结构的 JavaScript 对象树，它包含了组件的层次结构和状态信息。

Diff 算法： React Reconciler 使用差异比较（Diffing）算法来比较新旧虚拟 DOM 树，找到需要更新的部分，并生成最小的变更集以更新实际的 DOM。

并发模式： React Reconciler 支持并发模式，它允许 React 应用在多个优先级的更新之间切换。这样可以更灵活地响应用户输入、网络请求等事件，并保持界面的响应性。

Pluggable 架构： React Reconciler 具有**可插拔**的架构，这意味着它可以被不同平台和环境的实现所替换。例如，React Native 使用了一个不同的 Reconciler 来适应移动端开发的特殊需求。
