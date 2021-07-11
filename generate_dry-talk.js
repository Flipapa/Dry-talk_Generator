function generateDryTalk(option) {
  // Data
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '這裡字要再放大一點'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // return error
  if (!option.target) {
    return '連對象都沒選，還想說幹話？！'
  }
  // Generate dry-talk
  let dryTalk = ''
  if (option.target === 'engineer') {
    dryTalk = '工程師' + task.engineer[Math.floor(Math.random() * task.engineer.length)] + phrase[Math.floor(Math.random() * phrase.length)] + '吧！'
  }else if (option.target === 'designer') {
    dryTalk = '設計師' + task.designer[Math.floor(Math.random() * task.designer.length)] + phrase[Math.floor(Math.random() * phrase.length)] + '吧！'
  } else if (option.target === 'entrepreneur') {
    dryTalk = '創業家' + task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)] + phrase[Math.floor(Math.random() * phrase.length)] + '吧！'
  }

  // Return dry-talk
  return dryTalk
}

// export
module.exports = generateDryTalk