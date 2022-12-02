import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, Modifier } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../index.css'

// symbole [] () ? |  / =

class CustomOption extends Component {
  

  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

  addStar = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '[ ]',
      editorState.getCurrentInlineStyle(),
    );
  
    this.props.setTextData(editorState.getCurrentContent().getPlainText())
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  addLine = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '? |',
      editorState.getCurrentInlineStyle(),
    );
    this.props.setTextData(editorState.getCurrentContent().getPlainText())
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  addEqual = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '/ =',
      editorState.getCurrentInlineStyle(),
    );


    this.props.setTextData(editorState.getCurrentContent().getPlainText())
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  addbrace = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '( )',
      editorState.getCurrentInlineStyle(),
    );
    this.props.setTextData(editorState.getCurrentContent().getPlainText())
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  render() {
    return (
      <>

        <div className='mx-3' onClick={this.addStar}>[]</div>
        <div className='mx-3' onClick={this.addbrace}>( )</div>
        <div className='mx-3' onClick={this.addLine}>? |</div>
        <div className='mx-3' onClick={this.addEqual}>/ =</div>
      </>
    );
  }
}


const EditorCustomToolbarOption = ({ setTextData }) => (
  <Editor toolbarCustomButtons={[<CustomOption setTextData={setTextData} />]} />
)

export default EditorCustomToolbarOption;

