//target my buttons and add funtionality based on the index ejs selectorALll becuase everything has its own delete or update 
const deleteButton = document.querySelectorAll('.delete-button')
const updateButton = document.querySelectorAll('.update-button')


//console.log('Delete button found:', deleteButton)
// each card/ user input has a delete button , if user clicks it then it should delete the card with the professors infromation/ rating 
deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.dataset.id

        fetch(`/reviews/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => window.location.reload())
            .catch(error => console.error(error))
    })
})

// when user wants to update information they click update then they can the reviews and the stars 
updateButton.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.dataset.id
        const review = prompt('Your updated review: ')
        if (review === null) return
        const stars = prompt('your new rating (1-5): ')
        if (stars === null) return

        fetch(`/reviews/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                review,
                stars: Number(stars)
            })
        })
            .then(res => res.json())
            .then(() => window.location.reload())
            .catch(error => console.error(error))
    })
})
