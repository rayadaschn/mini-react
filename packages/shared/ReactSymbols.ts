/** 判断当前环境是否支持 Symbol, 以及 Symbol.for 是否存在 */
const supportSymbol = typeof Symbol === 'function' && Symbol.for

/** 若环境支持 Symbol 则输出 Symbol 值，否则为数字（16 进制） */
export const REACT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for('react.element')
  : 0xeac18
