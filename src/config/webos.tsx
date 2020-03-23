declare var WebOSServiceBridge: any|undefined|null;
declare var webOS: any|undefined|null;

class DefaultBridge {
  call(api: string, callback: (msg: string) => void) => {
    console.log(`Attempt to call ${api} with callback ${callback}`);
  }
}

const defaultWebos = {};

export const os = () => webOS || defaultWebos;
export const bridge = () => WebOSServiceBridge || DefaultBridge;
