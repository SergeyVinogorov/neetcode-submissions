class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
   minWindow(s, t) {
    if (s.length < t.length) {
      return ''
    }

    const countT = new Map()
    const window = new Map()

    for (const char of t) {
      countT.set(
        char,
        (countT.get(char) ?? 0) + 1
      )
    }

    let have = 0
    const need = countT.size

    let left = 0

    let resultStart = 0
    let resultLength = Infinity

    for (let right = 0; right < s.length; right++) {
      const char = s[right]

      window.set(
        char,
        (window.get(char) ?? 0) + 1
      )

      if (
        countT.has(char) &&
        window.get(char) === countT.get(char)
      ) {
        have++
      }

      while (have === need) {
        const currentLength = right - left + 1

        if (currentLength < resultLength) {
          resultLength = currentLength
          resultStart = left
        }

        const leftChar = s[left]

        window.set(
          leftChar,
          window.get(leftChar) - 1
        )

        if (
          countT.has(leftChar) &&
          window.get(leftChar) < countT.get(leftChar)
        ) {
          have--
        }

        left++
      }
    }

    if (resultLength === Infinity) {
      return ''
    }

    return s.slice(
      resultStart,
      resultStart + resultLength
    )
  }
}
