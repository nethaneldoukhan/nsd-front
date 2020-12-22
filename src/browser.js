import React from 'react'
import { isIE } from 'react-device-detect'


const Browser = () => {
    const ie = isIE
    console.log(ie)
    return (
        <div>{ie && "הדפדפן לא תומך את האפליקציה. \n נא לעבור ל-google chrome או Edge או firefox"}</div>
    );
}

export default Browser;