import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import {
  Type,
  Key,
  Ref,
  Props,
  ReactElementType,
  ElementType,
} from 'shared/ReactTypes'

// ReactElement

const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props,
): ReactElementType {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: 'Huy',
  }
  return element
}

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null
  let ref: Ref = null
  const props: Props = {}

  for (const prop in config) {
    const val = config[prop]

    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val
      }
      continue
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }

    // 其它 类型, 排除原型上的 Props 类型
    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }

    // 处理 MaybeChildren
    const maybeChildrenLength = maybeChildren.length
    if (maybeChildrenLength) {
      if (maybeChildrenLength === 1) {
        props.children = maybeChildren[0]
      } else {
        props.children = maybeChildren
      }
    }

    return ReactElement(type, key, ref, props)
  }
}

// 实际上开发环境 jsx 会做更多处理判断, 这里等同于生产环境
export const jsxDEV = (type: ElementType, config: any) => {
  let key: Key = null
  let ref: Ref = null
  const props: Props = {}

  for (const prop in config) {
    const val = config[prop]

    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val
      }
      continue
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val
      }
      continue
    }

    // 其它 类型, 排除原型上的 Props 类型
    if (Object.hasOwnProperty.call(config, prop)) {
      props[prop] = val
    }

    return ReactElement(type, key, ref, props)
  }
}
