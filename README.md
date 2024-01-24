# 项目介绍
## 简介
- 以官方文档的沙盒项目-井字棋游戏开始（tic-tac-toe），学习并应用React的各种基本概念和工具，并将其部署到本地运行和云服务器上。

## 收获：
1. Convention over Configuration：React框架的代码规范，函数命名原则
2. JSX：JS + XML
3. TypeScript：为组件的 props 提供类型声明，用于正确性检查
4. 组件：抽象层级概念，组件之间的数据交互，如square-game-board，以bottom-up的模式，不断提取组件层级，将数据放于顶层。
5. Hook
   - 使用前应先考虑其必要性，比如在使用useEffect时，考虑能不能在渲染过程中计算所需内容
   - useState 储存需要一直跟踪的变化数据，储存在最顶部组件（board）中，提供接口给子组件（即在顶层进行数据转换）
   - useEffect 渲染后执行操作，而不是事件触发
