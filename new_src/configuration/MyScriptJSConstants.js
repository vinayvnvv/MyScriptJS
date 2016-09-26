const MyScriptJSConstants = {
  RecognitionType: {
    TEXT: 'TEXT',
    MATH: 'MATH',
    SHAPE: 'SHAPE',
    MUSIC: 'MUSIC',
    ANALYZER: 'ANALYZER'
  },
  InputMode: {
    CURSIVE: 'CURSIVE',
    ISOLATED: 'ISOLATED',
    SUPERIMPOSED: 'SUPERIMPOSED',
    VERTICAL: 'VERTICAL'
  },
  InputType: {
    CHAR: 'CHAR',
    WORD: 'WORD',
    SINGLE_LINE_TEXT: 'SINGLE_LINE_TEXT',
    MULTI_LINE_TEXT: 'MULTI_LINE_TEXT'
  },
  ResultDetail: {
    TEXT: 'TEXT',
    WORD: 'WORD',
    CHARACTER: 'CHARACTER'
  },
  ResultType: {
    Math: {
      LATEX: 'LATEX',
      MATHML: 'MATHML',
      SYMBOLTREE: 'SYMBOLTREE',
      OFFICEOPENXMLMATH: 'OFFICEOPENXMLMATH'
    },
    Music: {
      MUSICXML: 'MUSICXML',
      SCORETREE: 'SCORETREE'
    }
  },
  Protocol: {
    WS: 'WebSocket',
    REST: 'REST'
  },

  ModelState: {
    INITIALYZING: 'INITIALYZING'
  },
  RecognitionSlot: {
    ON_PEN_DOWN: 'ON_PEN_DOWN',
    ON_PEN_UP: 'ON_PEN_UP',
    ON_PEN_MOVE: 'ON_PEN_MOVE',
    ON_DEMAND: 'ON_DEMAND',
    ON_TIME_OUT: 'ON_TIME_OUT'
  }
};
export default MyScriptJSConstants;