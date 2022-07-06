import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'
import {spawn} from 'child_process'

declare var __static: string

export function downloadYoutube (address) {
  // 'Darwin' on macOS, and 'Windows_NT' on Windows
  var filePath = ''
  if (os.type() === 'Windows_NT') {
    filePath = path.join(__static, '/yt-dlp.exe')
  } else if (os.type() === 'Darwin') {
    filePath = path.join(__static, '/yt-dlp_macos')
  }
  let child = spawn(filePath, [
    '--skip-download',
    '--dump-json',
    address
  ], {
    shell: process.platform === 'win32'
  })
  var randomId = 'abcdefg'
  var outputFile = path.join(__static, '/output_' + randomId + '.info.json')
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile)
  }
  child.stdout.on('data', (data) => {
    console.log('开始写入文件...')
    fs.appendFile(outputFile, data, {
      encoding: 'utf8'
    }, (err) => {
      if (err) {
        console.log('写入文件失败！', err.message)
      } else {
        console.log('写入文件成功！')
      }
    })
  })
}
