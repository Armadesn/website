import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './index.less';
import E from 'wangeditor'

export default forwardRef(function(props, ref){

    const [ editorValue, setEditorValue ] = useState('')
    const [ editorText, setEditorText ] = useState('')

    function createEditor(){
        var editor = new E('#editor')
        editor.customConfig.menus = [
            'emoticon'
        ]
        editor.customConfig.onchange = function (html: string) {
            setEditorValue(html)
            setEditorText(editor.txt.text())
        }
        editor.create()
    }

    useImperativeHandle(ref, () => ({
        value: editorValue,
        text: editorText
    }));

    useEffect(()=>{
        createEditor()
    },[])

    return (
        <div>
            <div id='editor' className={styles.editorContent}></div>
        </div>
        
    )
})