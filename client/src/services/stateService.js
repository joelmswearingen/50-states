import axios from 'axios'  // this allows axios to be used in this file

export default {

    getAll() {  // this makes a request to route created in routes/state.js
        return axios.get('/api/states').then( response => {
            return response.data
        })
    }
}