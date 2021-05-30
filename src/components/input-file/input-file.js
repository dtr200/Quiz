import React, { useState } from 'react';

import './input-file.css';
import './hide.css';

const InputFile = ({ visible }) => {
  
    const [ text, setText ] = useState('Выберите файл')

    const inputFileHandler = ({ target }) => {        
        const { files } = target;
        
        const deleteExtension = /(.+)(\.[a-zA-Z]+)/;
        const loadedFile = files[0];
        const fileName = files[0].name.match(deleteExtension)[1];
        setText(fileName);
    }

    return (        
        <label className={visible}>
            <input 
                className="checkbox__file form-control-file"
                type="file"
                onChange={inputFileHandler} />
            {text}
        </label>        
    )
}

export default InputFile;