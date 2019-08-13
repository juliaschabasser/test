console.log('Client side javascript file is loaded!')

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let inputText = document.querySelector('input').value;

        fetch(`weather?adress=${inputText}`).then(async (response) => {
            let json = await response.json();
            console.log(json);
        })
    })
  })