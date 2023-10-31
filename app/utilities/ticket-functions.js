import axios from "axios"
const getTickets = async () => {
    try {
        const res = await axios('http://localhost:3000/api/ticket',)
        return res.data
    } catch (error) {
        console.log('failed to get ticket', error)
    }
}

const deleteTicket = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/ticket/${id}`,)
        return res.data

    } catch (error) {
        console.log('failed to get ticket', error)
    }
}

const getTicketById = async (id) => {
    try {
        const res = await axios(`http://localhost:3000/api/ticket/${id}`)
       
        return res.data

    } catch (error) {
        console.log('failed to get ticket', error)
    }
}


export { getTickets, deleteTicket, getTicketById }