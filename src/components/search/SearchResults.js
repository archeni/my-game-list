import React, { useState, useContext, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { Game } from "../games/Game"
import { GameContext } from "../games/GameProvider"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
// import { EditAnimalForm } from "../animal/EditAnimalForm"


export const SearchResults = ({ searchTerms }) => {
    // const { animals, releaseAnimal } = useContext(AnimalContext)
    // const { customers } = useContext(CustomerContext)
    // const { locations } = useContext(LocationContext)
    const { games } = useContext(GameContext)

    const [filteredGames, setFiltered] = useState([])
    const [selectedGame, setGame] = useState({
        game: {}
    })

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // Toggle edit modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = games.filter(game => game.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, games])

    return (
        <div className="searchResults">
            <h3>Game Search</h3>
            <div className="games">
                <button onClick={() => {
                  const gameName = games.find(g => g.name === games.locationId)
                  const gameID = games.find(g => g.id === games.locationId)
                  const gamePicture = games.find(g => g.image.original_url === games.locationId)
                  // const customer = customers.find(c => c.id === games.customerId)

                  setGame({ games })
                  toggle()
              }}>Enter</button>
            </div>

            {/* <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedGame.game.name}
                </ModalHeader>
                <ModalBody>
                    <EditAnimalForm key={selectedAnimal.animal.id} toggleEdit={toggleEdit} {...selectedAnimal} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedAnimal.animal.name}
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal> */}
        </div>
    )
}