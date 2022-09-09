import React, {useState} from 'react';

function Toggle() {

    const [darkTheme, setDarkTheme] = useState(false);

    if(darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    function toggle(){
        if(darkTheme) {
            setDarkTheme(false);
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            setDarkTheme(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    return(
    <div onClick={toggle}>
        Toggle
    </div>

    );
}

export default Toggle;