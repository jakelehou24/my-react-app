import React, { useState, useEffect } from 'react';
import "./index.css";

const TypingEffect = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const pause = 2000;

    useEffect(() => {
        const words =  ['Hello Everyone!',"My name is Jake Lehoullier."];
        const typingSpeed = 150;
        const deletionSpeed = 50;

        if (loopNum >= words.length) return;

        const fullText = words[loopNum % words.length];

        const type = () => {
            if (!isDeleting) {
                setText(prevText => fullText.slice(0, prevText.length + 1));
                if (text === fullText) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setText(prevText => prevText.slice(0, -1));
                if (text === "") {
                    setTimeout(() => {
                        setIsDeleting(false);
                        setLoopNum(loopNum + 1);
                    }, pause);
                }
            }
        };

        if (text === "My name is Jake Lehoullier." && !isDeleting) return;

        const timeoutId = setTimeout(type, isDeleting ? deletionSpeed : typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, loopNum]);

    const typed = text === "My name is Jake Lehoullier.";
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={require('./01EBE2F5-9017-43D0-B924-C098FB4115CB.jpeg')} alt="profile" style={{ width: '300px', height: 'auto' }} />
            <h1>
                {text}{!typed && <span className="blink-cursor">|</span>}
            </h1>
        </div>
    );
            
};

export default TypingEffect;
