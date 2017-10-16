import moment from 'moment'

/**
 * @param { string } format
 * ```
 * <span v-date-format="YYYY年M月DD日">2017-10-2</span>
 * => 2017年10月02日
 * ```
 */

export default {
  bind(el, binding) {
    const date = moment(el.textContent)
    if (date.isValid && binding.value) {
      Object.assign(el, { textContent: date.format(binding.value) })
    }
  }
}
