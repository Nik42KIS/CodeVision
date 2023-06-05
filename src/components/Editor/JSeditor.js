import React, { useContext } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { EditorContext } from '../../context/context';

const JSeditor = () => {
  const { js, setJs } = useContext(EditorContext);

  return (
    <AceEditor
      placeholder="Write your Javascript code here"
      mode="javascript"
      theme="monokai"
      name="editor_javascript"
      value={js}
      onChange={(value) => setJs(value)}
      fontSize={'16'}
      height={'100%'}
      width={'100%'}
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
        useWorker: false,
      }}
     
    />
  );
};

export default JSeditor;
