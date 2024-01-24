# ReactGame项目介绍
## 简介
- 以官方文档的沙盒项目-井字棋游戏开始（tic-tac-toe），学习并应用React的各种基本概念和工具，并将其部署到本地运行和[云服务器](http://www.tonyhuang0908.com "www.tonyhuang0908.com")(域名备案中)上。

## 项目结构
项目中采用了以下文件结构：
> /src
>> /components: 存放React组件
>> 
>> /styles: 存放样式文件
>>
>> App.tsx: 项目入口文件
>>
>> index.tsx: 项目渲染文件

## 遇到的困难及如何解决
在实现时间旅行该功能时，
   - 需要避免游戏的数据直接突变，从而可以在之后重新利用
   - 同时要尽可能减少渲染的组件数量，提高游戏效率

解决方法：
   - 将原来的`Squares`State状态提升，使用新的顶层组件`Game`存放`History`State，注意`.slice()`保证不变性
   - 利用Board的props(即游戏Squares数据)来计算当前轮棋手（X/O），减少State数量，还可以使用`memo`跳过部分组件的渲染

## 一些想探究的发现
- React中的渲染流程（render 和 commit 阶段）
- 在开发环境下，一次交互中，部分组件会渲染多次
- useEffect和useState的底层实现逻辑

## 特点功能
1. 时间回溯
   - 可在游戏过程中查看历史记录中任意一步的情况
2. 历史覆盖
   - 可选择不覆盖记录继续游戏或从历史任意一步开始覆盖游戏进度

## 收获：
1. Convention over Configuration：React框架的代码规范，函数命名原则
2. JSX：JS + XML
3. TypeScript：为组件的 props 提供类型声明，用于正确性检查
4. 组件：抽象层级概念，组件之间的数据交互，如square-game-board，以bottom-up的模式，不断提取组件层级，将数据放于顶层。
5. Hook
   - 使用前应先考虑其必要性，比如在使用useEffect时，考虑能不能在渲染过程中计算所需内容
   - `useState` 声明和修改State
      - 储存需要一直跟踪的变化数据，储存在最顶部组件（board）中，提供接口给子组件（即在顶层进行数据转换）
   - `useEffect` 管理异步逻辑
      - 渲染后执行操作，而不是事件触发
   - `useContext` 读取Context内容
   - 自定义 类似函数封装

## 未来展望
在项目的未来，我计划进一步扩展功能，优化界面，同时在游戏面板中加入更多的小游戏

## 致谢
特别感谢[React官方文档](https://zh-hans.react.dev/)和开源社区的资源

## 联系方式
如果您有任何问题、建议或合作意向，欢迎DM联系我
