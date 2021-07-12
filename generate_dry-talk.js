// Data
const careerList = require('./career.json')
const phrase = ['很簡單', '很容易', '很快', '很正常']

function generateDryTalk(option) {
  // return error
  if (!option.target) {
    return '連對象都沒選，還想說幹話？！'
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