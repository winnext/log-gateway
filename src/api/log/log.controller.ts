import { Request, Response } from 'express';
import LoggerLibrary from './log.library';
enum ErrLevels {
    'info',
    'debug',
    'error',
    'fatal',
    'warning'
}
type Device = {
  id: string,
  ip: string,
  os: string,
  os_version: string
  brand: string
  model: string
}
type err = {
    level: ErrLevels,
    username: string,
    device: Device,
    connected_ssid: string
    log_message: string
    native_message: string
    app_version: string
    current_activity: string
    log_type:string
    
}


export default class LogController {

    saveToLog(req : Request, res: Response) {
        let params = req.body;
        let device : Device = params.device;
        let logcontent: err = {
          level: params.log_level,
          username: params.username,
          device: device,
          connected_ssid: params.connected_ssid,
          log_message: params.log_message,
          native_message: params.native_message,
          app_version: params.app_version,
          current_activity: params.current_activity,
          log_type: "MobileAODL"
        }

        let logger = new LoggerLibrary();
        logger.writeLog(logcontent)
      
    }
}
