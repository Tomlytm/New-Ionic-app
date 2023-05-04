import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'currency-converter-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
