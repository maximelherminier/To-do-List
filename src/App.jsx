import './App.css'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const input = document.getElementById('input')
        const button = document.getElementById('button')
        const ul1 = document.getElementById('ul1')
        const ul2 = document.getElementById('ul2')

        button.addEventListener('click', () => {
            if (input.value === "") {
                alert("Rentrez quelque chose dans la barre afin de l'ajouter à la liste")
            } else {
                const li = document.createElement('li');
                ul1.appendChild(li);
                li.innerText = input.value;
                input.value = "";

                const span1 = document.createElement('span');
                span1.id = 'span1';
                li.appendChild(span1);
                span1.innerText = "✅";

                const span2 = document.createElement('span');
                span2.id = 'span2'
                li.appendChild(span2)
                span2.innerText = "❎"


                span1.addEventListener('click', () => {
                    const parent = span1.parentNode;
                    ul2.appendChild(parent);
                })

                span2.addEventListener('click', () => {
                    const parent = span2.parentNode;
                    ul1.removeChild(parent);
                })
            }
        })
    },[])




    return(
        <>
            <div className="inputAndButton">
                <input type="text" placeholder="Ajouter une tâche à faire..." id="input" />
                <button id="button">Ajouter à la liste</button>
            </div>
            <div className="allContainer">
                <div className="container container1">
                    <h1><i className="fa-solid fa-xmark"></i> A faire:</h1>
                    <ul id="ul1">

                    </ul>
                </div>

                <div className="container container2">
                    <h1><i className="fa-solid fa-check"></i> Fait:</h1>
                    <ul id="ul2">

                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
