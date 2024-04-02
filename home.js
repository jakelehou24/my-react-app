import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState(" ");
    const [isDeletting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ['Hello Everyone!', "My name is Jake Lehoullier."];
    const textToType = words[1];

    useEffect(() => {
        const type = () => {
            setIsDeleting(false);
            setText(prevText => {
                return isDeleting ? prevText.slice(0, -1) : textToType.slice(prevText.length + 1);
            });


            if (!isDeleting && text === textToType) {
                setIsDeleting(true);
            }
            else if (isDeleting && text === " ") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        type();

        return () => clearTimeout(handleTpying);
    }, [text, isDeleting, loopNum]);

    return <h1>{"<h1>"}{text}{"</h1>"}</h1>;

};

export default TypingEffect;

