import { Props, Key, Ref } from 'shared/ReactTypes'
import { WorkTag } from './workTags'
import { Flags, NoFlags } from './fiberFlags'

export class FiberNode {
  type: any // 对应组件的类型，可以是函数、类、字符串等
  tag: WorkTag // 标识节点的类型，例如函数组件、类组件、原生 DOM 元素等
  pendingProps: Props
  key: Key // 元素的 key 值，用于帮助 React 识别元素的变化。
  stateNode: any // 如果节点是一个类组件的 Fiber 节点，stateNode 将引用该类组件的实例
  ref: Ref // 用于在 React 中创建对组件或 DOM 元素的引用

  return: FiberNode | null // 指向父节点的 Fiber 节点
  sibling: FiberNode | null // 指向下一个兄弟节点的 Fiber 节点
  child: FiberNode | null // 指向第一个子节点的 Fiber 节点
  index: number // 用于标识当前元素在其父节点的子节点列表中的位置索引

  memoizedProps: Props | null // 保存组件实例当前属性（props）的字段
  alternate: FiberNode | null // 用于双缓冲技术，指向上一次更新的 Fiber 节点
  flags: Flags // 保存有关组件状态和其他信息的标志位的字段

  constructor(tag: WorkTag, pendingProps: Props, key: Key) {
    // 实例
    this.tag = tag
    this.key = key
    this.stateNode = null
    this.type = null

    // 树结构
    this.return = null // 指向父 fiberNode
    this.sibling = null // 指向兄弟 fiberNode
    this.child = null // 指向 子 fiberNode
    this.index = 0 // 同级

    this.ref = null

    // 作为工作单元
    this.pendingProps = pendingProps
    this.memoizedProps = null

    this.alternate = null
    // 副作用
    this.flags = NoFlags
  }
}
