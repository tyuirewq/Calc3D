import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.calculator.threed',
  appName: '3D Calculator',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
