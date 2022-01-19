import StackdriverErrorReporter from 'stackdriver-errors-js';

const GCP_PROJECT_ID = 'NOME_DO_PROJETO';
const SERVICE_NAME = 'NOME_DO_PROJETO';

let localInstance;

if (process.env.VUE_APP_ENABLE_STACK_DRIVER === 'true') {
  localInstance = new StackdriverErrorReporter();
  localInstance.start({
    key: process.env.VUE_APP_STACK_DRIVER_API_KEY,
    projectId: GCP_PROJECT_ID,
    service: SERVICE_NAME,
  });
} else {
  localInstance = {
    report: console.error,
    setUser: () => null,
  };
}

const stackdriverErrorHandler = localInstance;

export default stackdriverErrorHandler;
