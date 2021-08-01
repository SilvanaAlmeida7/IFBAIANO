function newItem(title, content, hour){
    const savedItem = document.querySelector('.saved-notes')

    const div = document.createElement('div')
    const span = document.createElement('span')
    const pa = document.createElement('p')
    const date = document.createElement('span')

    div.classList.add('item')
    date.classList.add('hour')

    span.textContent = title
    pa.textContent = content
    date.textContent = `Salvo às: ${hour}`

    savedItem.insertAdjacentElement('beforeend', div)
    div.insertAdjacentElement('beforeend', span)
    div.insertAdjacentElement('beforeend', pa)
    div.insertAdjacentElement('beforeend', date)
}

const button = document.querySelector('.button-add')

let verif = 0

/* Button */
button.addEventListener('click', () => {

    if(verif <= 20){

        verif+=1

        const title = document.querySelector('#dice-title')
        const content = document.querySelector('#dice-content')

        const data = new Date()
        const hours = data.getHours()
        const minute = data.getMinutes()
        const second = data.getSeconds()
        const dataCompleted = `${hours}:${minute}:${second}`

        if(title.value == '' && content.value == ''){
            alert('insira os dados corretamente')
        }else{
            newItem(title.value, content.value, dataCompleted)
            title.value = ''
            content.value = ''
        }


    }else{

        const element = document.querySelector('.alert')

        if(element != null){
            element.classList.toggle('transition')

        }else{

            const newBloco = document.querySelector('.insert-notes')
            const alert = document.createElement('p')

            alert.classList.add('alert')
            alert.textContent = 'Limite de notas atingidas'

            newBloco.insertAdjacentElement('beforeend', alert)
        }
    }
})
