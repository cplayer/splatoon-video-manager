'use strict'

import {ipcMain} from 'electron'
import {downloadYoutube} from '../renderer/libs/youtube-dl/youtube'
import {downloadTwitch} from '../renderer/libs/twitch-dl/twitch'
import {downloadOpenRec} from '../renderer/libs/openrec-dl/openrec'

export default function setIPCChannels () {
  ipcMain.on('download-youtube', (event, address) => {
    downloadYoutube(address)
  })

  ipcMain.on('download-twitch', (event, address) => {
    downloadTwitch(address)
  })

  ipcMain.on('download-openrec', (event, address) => {
    downloadOpenRec(address)
  })
}
