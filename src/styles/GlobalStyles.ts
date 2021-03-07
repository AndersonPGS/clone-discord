import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
    --primary: #171A1F; //#212429
    --secondary: #171A1F;
    --tertiary: rgb(19,21,25);
    --quaternary: #171A1F;
    --quinary: #22262E;
    --senary: #828386;
 
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: #1B1F25;
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #58D25D;
    --mention-detail: #58D25D;
    --mention-message: rgba(88, 210, 93, .05);
 
    --link: #5d80d6;
 
    --main: #58D25D ;
  }
`;