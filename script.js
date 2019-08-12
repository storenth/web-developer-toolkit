/* reset default styles */ 
* {
    box-sizing: border-box;
  }
*{
    margin: 0;
    padding: 0;
}

body {
   background-color: rgb(174, 228, 250);
   text-align: center;
}

#main {
   font-family: 'Blinker', sans-serif;
}

/* the toolbox */
#toolbox {
    margin-top: 30vh;
}
#size-checker, #color-picker, #em-converter {
    font-size: 3rem;
    border: 2px solid black;
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 20px;
    margin: 0 auto;
    width: 600px;
    min-height: 300px;
}
#color-picker, #em-converter {
    display: none;
}
#size {
    font-size: 4rem;
}

/* buttons */

#button-checker, #button-picker, #button-converter {
    display: inline-block;
    border: 2px solid black;
    border-bottom: 2px dashed black;
    border-radius: 5px 5px 0 0;
    width: 198px;
    font-size: 1.3em;
    padding: 5px 0;
}
#button-checker {
    padding-top: 15px;
}
#button-picker {
background-color: lightgrey;
}
#button-converter {
background-color: lightgrey;
}
#color-button {
    background-color: aquamarine;
    border: 2px solid rosybrown;
    color: rosybrown;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    font-size: 25px;
    width: 360px;
    margin: 20px auto 0 auto;
    cursor: pointer;
}
