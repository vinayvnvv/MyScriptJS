import { modelLogger as logger } from '../../../configuration/LoggerConfig';
import * as Cdkv3WSRecognizerUtil from './Cdkv3WSRecognizerUtil';
import * as InkModel from '../../../model/InkModel';

// Re-use the recognition type for math
export { getAvailableRecognitionSlots } from '../common/Cdkv3CommonMathRecognizer';

const websocketContext = {};
/**
 * Do the recognition
 * @param paperOptionsParam
 * @param modelParam
 * @returns {Promise} Promise that return an updated model as a result}
 */
export function recognize(paperOptionsParam, modelParam) {
  const paperOptions = paperOptionsParam;
  const model = modelParam;
  const currentWSMathRecognizer = this;

  const buildStartInput = () => {
    const retStructure = {
      type: 'start',
      textParameter: paperOptions.recognitionParams.textParameter,
      inputUnits: [{
        textInputType: 'MULTI_LINE_TEXT',
        components: Cdkv3WSRecognizerUtil.extractPendingStrokesAsComponentArray(model)
      }]
    };
    return retStructure;
  };

  function buildContinueInput(modelInput) {
    const input = {
      type: 'continue',
      inputUnits: [{
        textInputType: 'MULTI_LINE_TEXT',
        components: Cdkv3WSRecognizerUtil.extractPendingStrokesAsComponentArray(modelInput)
      }]
    };
    return input;
  }


  const processTextResult = (callbackContext, message) => {
    // Memorize instance id
    const modelUnderRecognition = callbackContext.model;

    // Update model
    logger.debug('Cdkv3WSTextRecognizer update model', message.data);
    modelUnderRecognition.rawResult = message.data;
    modelUnderRecognition.rawRecognizedStrokes = modelUnderRecognition.rawRecognizedStrokes.concat(InkModel.extractNonRecognizedStrokes(modelUnderRecognition));
    // Updating the model
    callbackContext.promiseResolveFunction(modelUnderRecognition);
  };

  const scheme = (paperOptions.recognitionParams.server.scheme === 'https') ? 'wss' : 'ws';
  const url = scheme + '://' + paperOptions.recognitionParams.server.host + '/api/v3.0/recognition/ws/text';
  return Cdkv3WSRecognizerUtil.recognize(url, paperOptionsParam, modelParam, websocketContext, buildStartInput, buildContinueInput, processTextResult);
}

