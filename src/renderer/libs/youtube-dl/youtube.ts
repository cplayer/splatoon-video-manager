import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'
import {spawn} from 'child_process'

export function downloadYoutube (address) {
  // 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows
  var filePath = ''
  if (os.type() === 'Windows_NT') {
    filePath = path.join(__static, '/yt-dlp.exe')
  } else if (os.type() === 'Darwin') {
    filePath = path.join(__static, '/yt-dlp_macos')
  }
  let child = spawn(filePath + ' --skip-download --dump-json "' + address + '"', {
    shell: process.platform === 'win32'
  })
  child.stdout.on('data', (data) => {
    console.log('开始写入文件...')
    fs.writeFile(path.join(__static, '/output.info.json'), data, {
      encoding: 'utf8'
    }, (err) => {
      if (err) {
        process.stdout.write('文件写入失败！', err.message)
      } else {
        process.stdout.write('文件写入成功！')
      }
    })
  })
}
