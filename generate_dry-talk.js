// Data
const careerList = require('./career.json')
const phrase = ['很簡單', '很容易', '很快', '很正常']
const errorNotice = ['連對象都沒選，還想說幹話？！', '孩子，先選好對象再說話好嗎？','閉上眼睛深呼吸，選個對象我們再來一次！','按按鈕前多想想，你可以不用做傻事','停止你愚蠢的行為，講話也是要看對象的好嗎？']

function generateDryTalk(option) {
  // return error
  if (!option.target) {
    return errorNotice[Math.floor(Math.random() * errorNotice.length)]
  }
  // Generate dry-talk
  const careers = careerList.target
  let dryTalk = ''
  careers.forEach((career) => {
    if (option.target === career.name) {
      dryTalk = `${career.name_zh}${career.task[Math.floor(Math.random() * career.task.length)]}${phrase[Math.floor(Math.random() * phrase.length)]}吧！`
    }
  })

  // Return dry-talk
  return dryTalk
}

// export
module.exports = generateDryTalk