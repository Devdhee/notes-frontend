import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode{
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-500: #2b3a4b;
  --color-grey-600: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 10%;
  --image-opacity: 90%;
  }  

  &.dark-mode{
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-600: #e5e7eb;

     
    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
   
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
}

html{
  font-size: 62.5%;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-600);

  transition: color 0.3s, background-color 0.3s, transform 0.35s ease-in-out;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow-x: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-100);
  color: var(--color-grey-600);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-blue-100);
  outline-offset: -1px;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

.tiptap {
border: .15rem solid;
background-color: white;
padding: 2rem 1rem;
border-radius: 1rem;
min-height: 20rem;

&active, &focus, &hover{
  /* border: .15rem solid var(--color-blue-100); */
}

  :first-child {
    margin-top: 0;
  }


  ul, 
  ol {
    padding: 0 1rem;
    margin: 1.5rem 1rem 1.5rem 0.4rem;
    
    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

 
  h1 {
    line-height: 1.1;
    margin-top: 2.5rem;
  }

  h1 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 { 
    font-size: 2rem; 
  }


 
  code {
    background-color: var(--color-grey-50);
    border-radius: 0.4rem;
    color: white;
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: #222222;
    border-radius: 0.5rem;
    color: white;
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 1.2rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid var(--color-blue-700);
    margin: 2rem 0;
    padding-left: 1.5rem;
   } 
   }

   .control-group{
    margin-bottom: 2.5rem;
   }

   .button-group{
     display: flex;
     gap: .75rem;
     flex-wrap: wrap;

     button{
       padding: .25rem .5rem;
       border-radius: 0.5rem;
       font-size: .5rem;
       cursor: pointer;

       &.is-active{
         background-color: white;
         color: var(--white);
       }
     }
   }
`;

export default GlobalStyles;
