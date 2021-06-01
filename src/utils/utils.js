/**
 * @author Mr.H
 * @param {HTMLElement} container overflow: auto元素,即滚动区域的元素
 * @param {HTMLElement} selected 当前选中元素
 */
export function scrollIntoView(container, selected) {
  if (!selected) {
    container.scrollTop = 0
    return
  }

  const offsetParents = []
  let pointer = selected.offsetParent
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer)
    pointer = pointer.offsetParent
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => (prev + curr.offsetTop), 0) // 当前元素相对offsetParent的top位置,若该元素的offsetParent非container, 需加上该元素offsetParent的offsetTop值
  const bottom = top + selected.offsetHeight // 当前选择元素底部(bottom)相对offsetParent的top位置
  const viewRectTop = container.scrollTop // 可是区域的最小位置
  const viewRectBottom = viewRectTop + container.clientHeight // 可视区域的最大位置
  // 当前元素不在可视区域内(top < viewRectTop | bottom > viewRectBottom)
  if (top < viewRectTop) {
    container.scrollTop = top
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight
  }
}

export const disabledBrowserReview = () => {
  // eslint-disable-next-line no-undef
  const e = window.event || arguments[0]
  const f12 = e && e.keyCode === 123
  const csi = e.ctrlKey && e.shiftKey && e.keyCode === 73 // ctrl + shift + i
  const sF10 = e.shiftKey && e.keyCode === 121 // shift + f10
  if (f12 || csi || sF10) {
    event.returnValue = false
    return false
  }
}
